import * as React from "react";

import { Stack, Toggle } from "@fluentui/react";
import { darkTheme, lightTheme } from "../../../Themes";

import MainNav from "./MainNav";
import { ThemeProvider } from "@fluentui/react-theme-provider";
import TopNav2 from "./TopNav";
import styles from "./MyMcKessonHomePage.module.scss";
import { useState } from "react";

const MyMcKessonHomePage: React.FC = () => {
  const [useDarkMode, setUseDarkMode] = useState(false);
  const [showText, setShowText] = useState(false);
  const [showSrcSet, setSrcSet] = useState('');

 
  return (
    <div className={styles.myMcKessonHomePage}>
      <ThemeProvider
        theme={useDarkMode ? darkTheme : lightTheme}
        applyTo="element"
      >
        {/* <Toggle
          label="Change themes"
          onText="Dark Mode"
          offText="Light Mode"
          onChange={() => setUseDarkMode(!useDarkMode)}
        /> */}
        <TopNav2 />
        <MainNav />
        <h6>Hello Louai</h6>
        <div className={styles.homeUserCardsContainer}>
          <div className={styles.homeUserCards}>
            <div className={styles.homeUserCards__title}>
              Pay Summary
              <br />
              As of
            </div>
            <div>{showText ? "$70,0000" : "******"}</div>
            <Stack>
              <Toggle
                className={styles.msToggle}
                label={<>View amount</>}
                onChange={() => setShowText(!showText)}
              />
            </Stack>
          </div>

          <section className={styles.homeUserCards}>
            <div className={styles.homeUserCards__title}>Regular PTO</div>
            <div>Available Balance as of</div>
            <div>-</div>
            <div>------</div>
          </section>
        </div>
        <section className={styles.vaccinationsResourcesContainer}>
          <h6>Vaccinations Resources</h6>
          <ul className={styles.ctaSection}>
            <li>
              <a href="#">Vaccination Registration in Workday</a>
            </li>
            <li>
              <a href="#">Protect Your Community Video</a>
            </li>
            <li>
              <a href="#">COVID-19 Education Session</a>
            </li>
          </ul>
        </section>
        <section className={styles.mcKessonNewsSection}>
          <h6>Mckesson News</h6>
          <div className={styles.mcKessonNewsSection__recentNews}>

            <p className={styles.recentNewsText}>
              Participate in community service from Jan. 17-20 to honor Dr.
              Martin Luther King, Jr.'s life and legacy.
            </p>
            

            {/* <img src=""
              srcSet={
                require("../../assets/picture-MLK-mobile_LI.jpg 300w, ../../assets/picture-MLK-tablet_LI.jpg 600w, ../../assets/picture-MLK-desktop_LI.jpg 1200w")}
              alt="MLK"
              sizes="70vmin"
            /> */}
            {/* <picture>
              <source
                media="(max-width: 640px)"
                srcSet={require("../../assets/picture-MLK-mobile_LI.jpg")}
                sizes="auto"
              />
              <source
                media="(min-width: 641px)"
                srcSet={require("../../assets/picture-MLK-tablet_LI.jpg")}
              />
              <source
                media="(min-width: 1240px)"
                srcSet={require("../../assets/picture-MLK-desktop_LI.jpg")}
                sizes="(min-width: 1240px) 33vw, 96vw"
              />
              <img
                src={require("../../assets/picture-MLK-desktop_LI.jpg")}
                alt="MLK picture giving the same i have a dream"
                sizes="70vw"
              />
              
              </picture> */}

          </div>
        </section>
      </ThemeProvider>
    </div>
  );
};

export default MyMcKessonHomePage;
