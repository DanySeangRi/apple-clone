import React from "react";
import BigCard from "../common/BigCard";
import { imageHome } from "../layout/data.js";
import { heroItem } from "../layout/data.js";
import Button from "../common/Button.jsx";
import { btnCss } from "../layout/data.js";
import {logo} from '../layout/data.js'
const Main = () => {
  return (
    <div className="">
    
      <section>
          <BigCard
            videoDesktop={imageHome[0].videoDesktop}
            videoMobile={imageHome[0].videoMobile}
            title={heroItem[0].title}
            description={heroItem[0].description}
            btn1={<Button title={btnCss[3].title} css={btnCss[3].css} />}
          />

          <BigCard
           imageDesktop={imageHome[1].imageDesktop}
           imageMobile={imageHome[1].imageMobile}
            title={heroItem[1].title}
            description={heroItem[1].description}
            btn1={<Button title={btnCss[0].title} css={btnCss[0].css} />}
            btn2={<Button title={btnCss[2].title} css={btnCss[2].css} />}
          />

          <BigCard
            imageDesktop={imageHome[2].imageDesktop}
            imageMobile={imageHome[2].imageMobile}
            description={heroItem[2].description}
            btn1={<Button title={btnCss[0].title} css={btnCss[0].css} />}
            btn2={<Button title={btnCss[1].title} css={btnCss[1].css} />}
            logoDesktop={logo[0].logoDesktop}
            logoMobile={logo[0].logoMobile}
          />

      </section>
    </div>
  );
};

export default Main;
