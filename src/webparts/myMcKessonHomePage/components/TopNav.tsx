import * as React from 'react';

import { Icon } from 'office-ui-fabric-react';
import styles from './TopNav.module.scss';

export default class TopNav extends React.Component<{}> {

    public render() {
        return (
            <div className={styles.topNav} >
                <div className={styles.myMcKessonFiller}></div>
                <div className={styles.myMckessonText}>
                    <span className={styles.myStyle}>My</span>
                    <span className={styles.mcKnetStyle}>McKesson</span>
                </div>
                <div className={styles.myMckessonIcons}>
                    <Icon iconName='Zoom' className={styles.iconColor} />
                    <Icon iconName='Ringer' className={styles.iconColor} />
                    <Icon iconName='Contact' className={styles.iconColor} />
                </div>
            </div>
        );
    }
}