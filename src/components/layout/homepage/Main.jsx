import React from "react";
import Card from "../../common/card/Card.jsx";
import Button from "../../common/Button.jsx";
import { homeHeroData, cardCss, btnCss, slideShowData,videoSlideShowData } from "../data/promotionData.js";
import Slideshow from "./SlideShow.jsx";

const Main = () => {
  return (
    <main className="flex flex-col gap-3">
      {/* HERO VIDEO */}
      <section>
        <Card
          variant="video"
          videoDesktop={homeHeroData[0].media.videoDesktop}
          videoMobile={homeHeroData[0].media.videoMobile}
          title={homeHeroData[0].content.title}
          description={homeHeroData[0].content.description}
          css={cardCss[3].bigCard}
        />
      </section>

      {/* HERO IMAGE CARDS */}
      <section>
        {homeHeroData.slice(1, 3).map((item, index) => (
          <Card
            key={index}
            variant="image"
            imageDesktop={item.media.imageDesktop}
            imageMobile={item.media.imageMobile}
            title={item.content.title}
            description={item.content.description}
            css={cardCss[0].bigCard}
            btn1={<Button title={btnCss[0].title} css={btnCss[0].css} />}
            btn2={
              index === 0
                ? <Button title={btnCss[2].title} css={btnCss[2].css} />
                : <Button title={btnCss[1].title} css={btnCss[1].css} />
            }
          />
        ))}
      </section>

      {/* PROMO GRID */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {homeHeroData.slice(3).map((item, index) => {
          const showPrimary = index !== 4;
          const showSecondary = true;

          return (
            <Card
              key={index}
              variant="image"
              imageDesktop={item.media.imageDesktop}
              imageMobile={item.media.imageMobile}
              title={item.content.title}
              description={item.content.description}
              logoDesktop={item.logo?.desktop}
              logoMobile={item.logo?.mobile}
              css={cardCss[1].smallCard}
              btn1={showPrimary && <Button title={btnCss[0].title} css={btnCss[0].css} />}
              btn2={
                showSecondary && (
                  <Button
                    title={
                      index === 4
                        ? btnCss[4].title
                        : index === 5
                        ? btnCss[5].title
                        : btnCss[1].title
                    }
                    css={
                      index === 4
                        ? btnCss[4].css
                        : index === 5
                        ? btnCss[5].css
                        : btnCss[1].css
                    }
                  />
                )
              }
            />
          );
        })}
      </section>

      {/* SLIDESHOW */}
    
     
      <Slideshow slides={slideShowData} cardCss={cardCss} title="Endless entertainment" />
      <Slideshow slides={videoSlideShowData} cardCss={cardCss} title="More From Apple" background="bg-black text-white" />
    </main>
  );
};

export default Main;
