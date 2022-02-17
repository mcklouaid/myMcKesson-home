import * as React from 'react';

import { IMainNav } from './IMyMcKessonHomePageProps';
import { Icon } from 'office-ui-fabric-react';
import styles from './MainNav.module.scss';

export default class MainNav extends React.Component<{}> {
    private _navElement: IMainNav [] = [
        {
          iconName: 'Home',
          title: 'Home',
          navDescription: 'home',
        },
        {
          iconName: 'ClipboardListMirrored',
          title: 'Daily Screening',
          navDescription: 'daily screening',
        },
        {
          iconName: 'Money',
          title: 'Pay',
          navDescription: 'pay',
        },
        {
          iconName: 'Umbrella',
          title: 'PTO',
          navDescription: 'PTO',
        },
        {
          iconName: 'CollapseMenu',
          title: 'More',
          navDescription: 'more',
        }
      ];

    public render() {
        return (
            <div className={styles.navbarContainer}>
                {
                    this._navElement.map(navItem => (
                        <div className={styles.iconElementsContainer}>
                            <div><a href=""> <Icon className={`${styles.msIcon} ${styles.msIconColor}`} iconName={navItem.iconName} /></a></div>
                            <div className={`${styles.fontColor}`}><a href="">{navItem.title}</a></div>
                        </div>
                    ))
                }
            </div>
        );
    }
}