import * as React from 'react';
import * as ReactDom from 'react-dom';
import * as strings from 'MyMcKessonHomePageWebPartStrings';

import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';

import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
//import { IMyMcKessonHomePageProps } from './components/IMyMcKessonHomePageProps';
import MyMcKessonHomePage from './components/MyMcKessonHomePage';
import { Version } from '@microsoft/sp-core-library';

export interface IMyMcKessonHomePageWebPartProps {
  description: string;
  firstTitle: string;
}

export default class MyMcKessonHomePageWebPart extends BaseClientSideWebPart<IMyMcKessonHomePageWebPartProps> {

  public render(): void {
    const element: React.ReactElement<{}> = React.createElement(
      MyMcKessonHomePage
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
