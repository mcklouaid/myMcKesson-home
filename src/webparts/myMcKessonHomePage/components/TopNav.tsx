import * as React from "react";

import { Icon } from '@fluentui/react/lib/Icon';
import { SearchBox } from "@fluentui/react/lib/SearchBox";
import styles from "./TopNav.module.scss";
import { useState } from "react";

export default function TopNav2() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={styles.topNav}>
        <div className={styles.myMcKessonFiller}>
          <img
            src={require("../../assets/mckesson-logo-phone-variation.png")}
            alt="mckesson logo"
            className={open ? "" : styles.hideIcon}
          />
        </div>
        <div className={styles.myMckessonText}>
          <div className={open ? styles.hideIcon : ""}>
            <span className={styles.myStyle}>My</span>
            <span className={styles.mcKnetStyle}>McKesson</span>
          </div>
          <form
            action=""
            className={`${styles.searchField} {$open ? styles.showIcon : styles.hideIcon}`}
          >
            <SearchBox
              className={open ? styles.showIcon : styles.hideIcon}
              placeholder="Search"
              onEscape={(ev) => {
                console.log("Custom onEscape Called");
              }}
              onClear={(ev) => {
                console.log("Custom onClear Called");
              }}
              onChange={(_, newValue) =>
                console.log("SearchBox onChange fired: " + newValue)
              }
              onSearch={(newValue) =>
                console.log("SearchBox onSearch fired: " + newValue)
              }
            />
          </form>
        </div>
        <div className={styles.myMckessonIcons}>
          <Icon
            iconName="Zoom"
            className={styles.iconColor}
            onClick={() => setOpen(!open)}
          />

          <Icon iconName="Ringer" className={styles.iconColor} />
          <Icon iconName="Contact" className={styles.iconColor} />
        </div>
      </div>
    </>
  );
}

// export default class TopNav extends React.Component<{}> {
//   public render() {
//     const [toggle, setToggle] = useState(false);

//     return (
//       <div className={styles.topNav}>
//         <div className={styles.myMcKessonFiller}>
//           {/* <img src={require("../../assets/mckesson-logo-phone-variation.png")} alt="mckesson logo" /> */}
//         </div>
//         <div className={styles.myMckessonText}>
//           <span className={styles.myStyle}>My</span>
//           <span className={styles.mcKnetStyle}>McKesson</span>
//         </div>
//         <div className={styles.myMckessonIcons}>
//           <Icon
//             iconName="Zoom"
//             className={styles.iconColor}
//             onClick={() => console.log()}
//           />
//           <SearchBox
//             placeholder="Search"
//             onEscape={(ev) => {
//               console.log("Custom onEscape Called");
//             }}
//             onClear={(ev) => {
//               console.log("Custom onClear Called");
//             }}
//             onChange={(_, newValue) =>
//               console.log("SearchBox onChange fired: " + newValue)
//             }
//             onSearch={(newValue) =>
//               console.log("SearchBox onSearch fired: " + newValue)
//             }
//           />

//           <Icon iconName="Ringer" className={styles.iconColor} />
//           <Icon iconName="Contact" className={styles.iconColor} />
//         </div>
//       </div>
//     );
//   }
// }
