import React from "react";
import Card from "../common/Card.jsx";
import Button from "../common/Button.jsx";
import { btnCss, cardCss, homeHeroData,slideShowData } from "./promosData.js";

const Main = () => {
  return (
    <div>
      {/* BIG HERO CARDS */}
      <section>
        {homeHeroData.slice(0, 3).map((item, index) => (
          <Card
            key={index}
            videoDesktop={item.media.videoDesktop}
            videoMobile={item.media.videoMobile}
            imageDesktop={item.media.imageDesktop}
            imageMobile={item.media.imageMobile}
            title={item.content?.title}
            description={item.content?.description}
            variant="big"
            btn1={
              <Button
                title={index === 0 ? btnCss[3].title : btnCss[0].title}
                css={index === 0 ? btnCss[3].css : btnCss[0].css}
              />
            }
            btn2={
              index > 0 && (
                <Button title={btnCss[2].title} css={btnCss[2].css} />
              )
            }
            css={cardCss[0].bigCard}
          />
        ))}
      </section>

      {/* SMALL GRID CARDS */}
      <section className=" promos grid grid-cols-1 md:grid-cols-2 gap-3">
        {homeHeroData.slice(3).map((item, index) => {
          const btn1 =
            index === 4 ? null : index === 5 ? (
              <Button title={btnCss[0].title} css={btnCss[0].css} />
            ) : (
              <Button title={btnCss[0].title} css={btnCss[0].css} />
            );

          const btn2 =
            index === 4 ? (
              <Button title={btnCss[4].title} css={btnCss[4].css} />
            ) : index == 5 ? (
              <Button title={btnCss[5].title} css={btnCss[5].css} />
            ) : (
              <Button title={btnCss[1].title} css={btnCss[1].css} />
            );
            
          return (
            <Card
              key={index}
              imageDesktop={item.media.imageDesktop}
              imageMobile={item.media.imageMobile}
              title={item.content?.title}
              description={item.content?.description}
              logoDesktop={item.logo?.desktop}
              logoMobile={item.logo?.mobile}
              btn1={btn1}
              btn2={btn2}
              css={cardCss[1].smallCard}
              variant={
                index == 0 || index === 1 || index === 3 ? "big" : "small"
              }
            />
          );
        })}
      </section>

      <section className="h-239.25 pt-13.25">
        <div className="flex flex-col">
          <h1 className="text-center text-[32px] lg:text-[56px] font-normal">
            Endless entertainment
          </h1>
          <div className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory gap-4 px-4">
            {slideShowData.map((item, index) => (
             <div className=" snap-start shrink-0   ">
               <Card
                key={index}
                videoDesktop={item.media.videoDesktop}
                videoMobile={item.media.videoMobile}
                imageDesktop={item.media.imageDesktop}
                imageMobile={item.media.imageMobile}
                css={cardCss[2].slideShowBigCard}
                appleTvLogo={item.logo.mobile}
                thumbNail={item.logo.thumbNail}
                slideTilte={item.content.title}
                slideDescription={item.content.description}
              />
             </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;
