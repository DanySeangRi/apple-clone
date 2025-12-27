import React from "react";
import Card from "../../common/card/Card.jsx";
import Button from "../../common/Button.jsx";
import {
  btnCss,
  cardCss,
  homeHeroData,
  slideShowData,
} from "../data/promosData.js";

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

      {/*  HERO IMAGE CARDS  */}
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
            btn1={
              <Button
                title={btnCss[ 0].title}
                css={btnCss[ 0].css}
              />
            }
          btn2={
            index === 0
              ? <Button title={btnCss[2].title} css={btnCss[2].css} />
              : <Button title={btnCss[1].title} css={btnCss[1].css} />
          }
            
          />
        ))}
      </section>

      {/*  PROMO GRID  */}
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
              btn1={
                showPrimary && (
                  <Button title={btnCss[0].title} css={btnCss[0].css} />
                )
              }
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

      {/* SLIDESHOW  */}
      <section className="pt-14 h-250">
        <h1 className="text-center text-[32px] lg:text-[56px] font-normal mb-6">
          Endless entertainment
        </h1>

        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-4 scroll-smooth">
          {slideShowData.map((item, index) => (
            <div key={index} className="snap-start shrink-0">
              <Card
                variant="slide"
                imageDesktop={item.media.imageDesktop}
                imageMobile={item.media.imageMobile}
                videoDesktop={item.media.videoDesktop}
                videoMobile={item.media.videoMobile}
                appleTvLogo={item.logo.mobile}
                thumbNail={item.logo.thumbNail}
                slideTitle={item.content.title}
                slideDescription={item.content.description}
                css={cardCss[2].slideShowBigCard}
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Main;
