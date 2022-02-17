import '../styles/global.css';

import {
  BaseApplicationCustomizer
} from '@microsoft/sp-application-base';
import { override } from '@microsoft/decorators';

const LOG_SOURCE: string = 'GlobalNavCustomizerApplicationCustomizer';

/**
 * If your command set uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface IGlobalNavCustomizerApplicationCustomizerProperties {
  // This is an example; replace with your own property
  cssurl: string;
}

/** A Custom Action which can be run during execution of a Client Side Application */
export default class GlobalNavCustomizerApplicationCustomizer
  extends BaseApplicationCustomizer<IGlobalNavCustomizerApplicationCustomizerProperties> {

  @override
  public onInit(): Promise<void> {
    const cssUrl: string = this.properties.cssurl;

    if (cssUrl) {
      const head: any = document.getElementsByTagName("head")[0] || document.documentElement;
      let customStyle: HTMLLinkElement = document.createElement("link");
      customStyle.href = cssUrl;
      customStyle.rel = "styleSheet";
      customStyle.type = "text/css";
      head.insertAdjacentElement("beforeEnd", customStyle);
    }

    if (!cssUrl) {
      console.log(this.properties);
    }

    return Promise.resolve();
  }
}
