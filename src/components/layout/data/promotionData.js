import baseBallDesktop from "../../../assets/hero/baseball.mp4";
import baseBallMobile from "../../../assets/hero/baseballMobile.mp4";
import threeIphoneMobile from "../../../assets/hero/hero_iphone_family__fuz5j2v5xx6y_small_2x.jpg";
import threeIphoneDesktop from "../../../assets/hero/hero_iphone_family__fuz5j2v5xx6y_largetall_2x.jpg";
import iPadAirDesktop from "../../../assets/hero/promo_ipad_air_avail__6i02t7nujr62_large.jpg";
import iPadAirMobile from "../../../assets/hero/hero_ipad_air_avail__c34ycq52exg2_small_2x.jpg";
import logoIpadAirDesktop from "../../../assets/logo/promo_logo_ipadair__frwnnsqveeye_medium_2x.png";
import logoIpadAirMobile from "../../../assets/logo/promo_logo_ipadair__frwnnsqveeye_large.png";
import airPodDesktop from "../../../assets/promos/hero_airpodspro_3__dn7gz4l22ree_largetall_2x.jpg";
import airPodMobile from "../../../assets/promos/promo_airpodspro_3__f6xmza7bglei_medium_2x.jpg";
import iwatchDesktop from "../../../assets/promos/promo_apple_watch_series_11__b63hxviqvonm_large_2x.jpg";
import iwatchMobile from "../../../assets/promos/promo_apple_watch_series_11__b63hxviqvonm_small_2x.jpg";
import appleCardDesktop from "../../../assets/promos/promo_apple_card__5cm7draujpey_large_2x.jpg";
import appleCardMobile from "../../../assets/promos/promo_apple_card__5cm7draujpey_small_2x.jpg";
import appleGiftCardDesktop from "../../../assets/promos/promo_apple_gift_card__etkqjveoh4uq_large.jpg";
import appleGiftCardMobile from "../../../assets/promos/promo_apple_gift_card__etkqjveoh4uq_small_2x.jpg";
import iPadMobile from "../../../assets/promos/promo_ipad__fioegapg12qi_small_2x.jpg";
import iPadDesktop from "../../../assets/promos/promo_ipad__fioegapg12qi_large_2x.jpg";
import iPhoneTradeInMobile from "../../../assets/promos/promo_iphone_tradein__bugw15ka691e_large_2x.jpg";
import iPhoneTradeInDesktop from "../../../assets/promos/promo_iphone_tradein__bugw15ka691e_small_2x.jpg";
import logoIwatchDesktop from "../../../assets/logo/promo_logo_apple_watch_series_11__d9br21pxygya_small_2x.png";
import logoIwatchMobile from "../../../assets/logo/promo_logo_apple_watch_series_11__d9br21pxygya_large.png";
import logoiPhoneTradeInDesktop from "../../../assets/logo/promo_logo_iphone_tradein__7y3gtai5az66_small_2x.png";
import logoiPhoneTradeInMobile from "../../../assets/logo/promo_logo_iphone_tradein__7y3gtai5az66_large.png";
import logoappleCardDesktop from "../../../assets/logo/logo__dcojfwkzna2q_small_2x.png";
import logoappleCardMobile from "../../../assets/logo/logo__dcojfwkzna2q_large.png";
const homeHeroData = [
  {
    media: {
      videoDesktop: baseBallDesktop,
      videoMobile: baseBallMobile,
    },
    content: {
      title: "Cricket. Shot on iPhone.",
      description: "iPhone 17 pro hit peak performance.",
    },
    logo: null,
  },
  {
    media: {
      imageDesktop: threeIphoneDesktop,
      imageMobile: threeIphoneMobile,
    },
    content: {
      title: "iPhone",
      description: "Say hello to the latest generation of iPhone.",
    },
    logo: null,
  },
  {
    media: {
      imageDesktop: airPodDesktop,
      imageMobile: airPodMobile,
    },
    content: {
      title: "AirPods Pro 3",
      description: "The world`s best in-ear Active Noise Cancellation.",
    },
    logo: null,
  },
  {
    media: {
      imageDesktop: iPadAirDesktop,
      imageMobile: iPadAirMobile,
    },
    content: {
      title: null,
      description: "Now supercharged by the M3 chip.",
    },
    logo: {
      title: "iPad Air",
      desktop: logoIpadAirDesktop,
      mobile: logoIpadAirMobile,
    },
  },
  {
    media: {
      imageDesktop: iwatchDesktop,
      imageMobile: iwatchMobile,
    },
     content: {
      title: null,
      description: "The ultimate wat to watch your health",
    },
     logo: {
      title: "iWatch",
      desktop: logoIwatchDesktop,
      mobile: logoIwatchMobile,
    },
  },
  {
    media: {
      imageDesktop: iPadDesktop,
      imageMobile: iPadMobile,
    },
    content: {
      title: 'iPad',
      description: "Now with the speed of the A16 chip and double the starting storage.",
    },
    logo: null,
  },
  {
    media: {
      imageDesktop: appleGiftCardDesktop,
      imageMobile: appleGiftCardMobile,
    },
   content: {
      title: 'Apple Gift Card',
      description: "Let them spend holidays however they like.",
    },
    logo: null,
  },
  {
    media: {
      imageDesktop: iPhoneTradeInDesktop,
      imageMobile: iPhoneTradeInMobile,
    },
     content: {
      title: null,
      description: "Get up to $180-$670 in credit when you trade in iPhone 13 or higher.",
    },
     logo: {
      title: "iPone Trade In",
      desktop: logoiPhoneTradeInDesktop,
      mobile: logoiPhoneTradeInMobile,
    },
  },
  {
    media: {
      imageDesktop: appleCardDesktop,
      imageMobile: appleCardMobile,
    },
     content: {
      title: null,
      description: "Get up 3% Daily Cash back with purchase",
    },
     logo: {
      title: "iWatch",
      desktop: logoappleCardDesktop,
      mobile: logoappleCardMobile,
    },
  },
];

const btnCss = [
  {
    title: "Learn More",
    css: "bg-[#0071e3] w-[104px] h-[36px] text-white lg:w-33 lg:h-11 hover:bg-[#0071e3] hover:text-white",
  },
  {
    title: "Buy ",
    css: "bg-transparent border border-[#0071e3] text-[#0071e3] w-[62px] h-[36px] Lg:w-[73.2px] lg:h-11 hover:bg-[#0071e3] hover:text-white",
  },
  {
    title: "Shop iPhone ",
    css: "bg-transparent border w-[114px] h-[36px] border-[#0071e3] text-[#0071e3]  lg:w-[140px] lg:h-11 hover:bg-[#0071e3] hover:text-white",
  },
  { title: "Shop gifts ", css: "bg-[#0071e3] w-[96px] h-9 text-white lg:w-[121px] lg:h-11" },
  { 
    title: "Get your estimate ", 
    css: "bg-[#0071e3] lg:w-[145px] lg:h-[44px] text-white lg:w-[121px] lg:h-11" 
  },
  {
    title: "Apply now ",
    css: "bg-transparent border w-[104px] h-[36px] border-[#0071e3] text-[#0071e3]  lg:w-33 lg:h-11 hover:bg-[#0071e3] hover:text-white",
  },
];
const cardCss=[
  {bigCard:'relative h-125 lg:h-173 w-full overflow-hidden mb-3'},
  {smallCard:'relative h-[500px] lg:h-[580px] overflow-hidden '},
  {slideShowBigCard : 'relative w-[275px] h-[498px] sm:w-[688px] sm:h-[338px] md:w-[930px] md:h-[523px] lg:h-[668px] lg:w-[1250px]'},
  {bigCard:'relative h-[600px] lg:h-[900px] w-full overflow-hidden mb-3'},
]

import f1DriveDesktop from '../../../assets/feature/1960x1044sr.jpg'
import f1DriverMobile from '../../../assets/feature/548x992nr.jpg'
import fourGrilDesktop from '../../../assets/feature/four-girlDesktop.jpg'
import feargirlDesktop from '../../../assets/feature/fear-girlDesktop.jpg'
import franceDesktop from '../../../assets/feature/franceDesktop.jpg'
import oldManDesktop from '../../../assets/feature/oldManDesktop.jpg'
import sportDesktop from '../../../assets/feature/sportDesktop.jpg'
import twoManDesktop from '../../../assets/feature/twoManDesktop.jpg'
import appleTvMobile from '../../../assets/logo/logo_hero_light__d7t8cya4x26a_small.png'
import blackManDesktop from '../../../assets/feature/blackManDesktop.jpg'
import yellGirlDesktop from '../../../assets/feature/yellowGirl.jpg'
import yellGirlMobile from '../../../assets/feature/yellow-girl.jpg'
import fourGirlMobile from '../../../assets/feature/twoGrilSmokeMobile.jpg'
import fearGrilMobile from '../../../assets/feature/twoGirlMobile.jpg'
import oldManMobile from '../../../assets/feature/old-man.jpg'
import sportMobile from '../../../assets/feature/sportMobile.jpg'
import franceMobile from '../../../assets/feature/franceMobile.jpg'
import twoManMobile from '../../../assets/feature/twoManMobile.jpg'
import blackManMobile from '../../../assets/feature/blackManMobile.jpg'
import thumNailPluribus from '../../../assets/thumbnail/pluribus.png'
const slideShowData =[
  {
      
    media: {
      imageDesktop: f1DriveDesktop,
      imageMobile: f1DriverMobile,
    },
     content: {
      title: 'Action',
      description: "Now stream on Apple TV.",
    },
     logo: {
      title: "iWatch",
      desktop: logoappleCardDesktop,
      mobile: appleTvMobile,
      thumbNail:thumNailPluribus,
    },
  
  },
    {
      
    media: {
      imageDesktop: fourGrilDesktop,
      imageMobile: fourGirlMobile,
    },
     content: {
      title: 'Drama',
      description: "The truth is top story.",
    },
     logo: {
      title: "iWatch",
      desktop: logoappleCardDesktop,
      mobile: appleTvMobile,
      thumbNail:thumNailPluribus,
    },
  
  },
    {
      
    media: {
      imageDesktop: feargirlDesktop,
      imageMobile: fearGrilMobile,
    },
     content: {
      title: 'Thriller',
      description: "Curiosity Kills.",
    },
     logo: {
      title: "iWatch",
      desktop: logoappleCardDesktop,
      mobile: appleTvMobile,
      thumbNail:thumNailPluribus,
    },
  
  },
    {
      
    media: {
      imageDesktop: oldManDesktop,
      imageMobile: oldManMobile,
      
    },
     content: {
      title: 'Thriller',
      description: "Old sins cast new shadows.",
    },
     logo: {
      title: "iWatch",
      desktop: logoappleCardDesktop,
      mobile: appleTvMobile,
      thumbNail:thumNailPluribus,
    },
  
  },
    {
      
    media: {
      imageDesktop: sportDesktop,
      imageMobile: sportMobile,
    },
     content: {
      title: 'Comedy',
      description: "Kindess make a comeback.",
    },
     logo: {
      title: "iWatch",
      desktop: logoappleCardDesktop,
      mobile: appleTvMobile,
      thumbNail:thumNailPluribus,
    },
  
  },
   {
      
    media: {
      imageDesktop: franceDesktop,
      imageMobile: franceMobile,
    },
     content: {
      title: 'Comedy',
      description: "Same family. New plan.",
    },
     logo: {
      title: "iWatch",
      desktop: logoappleCardDesktop,
      mobile: appleTvMobile,
      thumbNail:thumNailPluribus,
    },
  
  },
   {
      
    media: {
      imageDesktop: twoManDesktop,
      imageMobile: twoManMobile,
    },
     content: {
      title: 'Comedy',
      description: "Getting it together. Together.",
    },
     logo: {
      title: "iWatch",
      desktop: logoappleCardDesktop,
      mobile: appleTvMobile,
      thumbNail:thumNailPluribus,
    },
  
  },
   {
      
    media: {
      imageDesktop: blackManDesktop,
      imageMobile: blackManMobile,
    },
     content: {
      title: 'Thriller',
      description: "Let them think they are in control.",
    },
     logo: {
      title: "iWatch",
      desktop: logoappleCardDesktop,
      mobile: appleTvMobile,
      thumbNail:thumNailPluribus,
    },
  
  },
   {
      
    media: {
      imageDesktop: yellGirlDesktop,
      imageMobile: yellGirlMobile,
    },
     content: {
      title: 'Drama',
      description: "Happiness is a state of mind.",
    },
     logo: {
      title: "iWatch",
      desktop: logoappleCardDesktop,
      mobile: appleTvMobile,
      thumbNail:thumNailPluribus,
    },
  
  },
  

]
import danceDesktop from '../../../assets/videoSlide/danceDesktop.mp4'
import danceMobile from '../../../assets/videoSlide/danceMobile.mp4'
import errorDesktop from  '../../../assets/videoSlide/errorDesktop.mp4'
import errorMobile from '../../../assets/videoSlide/errorMobile.mp4'
import helicopterDesktop from '../../../assets/videoSlide/helicopterDesktop.mp4'
import helicopterMobile from '../../../assets/videoSlide/helicopterMobile.mp4'
import jasonDesktop from '../../../assets/videoSlide/jasonDesktop.mp4'
import jasonMobile from '../../../assets/videoSlide/jasonMobile.mp4'
import pandaDesktop from '../../../assets/videoSlide/pandaDesktop.mp4'
import pandaMobile from '../../../assets/videoSlide/pandaMobile.mp4'
import ridingBikeDesktop from '../../../assets/videoSlide/ridingBikeDesktop.mp4'
import ridingBikeMobile from '../../../assets/videoSlide/ridingBikeMobile.mp4'



const videoSlideShowData =[
  {
      
    media: {
      videoDesktop: danceDesktop,
      videoMobile: danceMobile,
    },
     content: {
      title: 'Design for Every Student',
      description: "Accessibility",
    },
  
  },
   {
      
     media: {
      videoDesktop:  errorDesktop,
      videoMobile: errorMobile,
    },
     content: {
      title: 'The Underdogs:Blue Screen of Death',
      description: "Apple At Work",
    },
  },
    {
      
     media: {
      videoDesktop: helicopterDesktop,
      videoMobile: helicopterMobile,
    },
     content: {
      title: 'Deaar Apple ',
      description: "Apple Watch",
    },
  
  },
    {
      
    media: {
      videoDesktop: jasonDesktop,
      videoMobile: jasonMobile,
    },
     content: {
      title: 'Jason Wang:Let Loose',
      description: "Shot on iPhone 17 Pro",
    },
  },
    {
      
    media: {
      videoDesktop: pandaDesktop,
      videoMobile: pandaMobile,
    },
     content: {
      title: 'A Critter Carol',
      description: "Shot on iPhone 17 Pro",
    },
  
  },
   {
      
     media: {
      videoDesktop: ridingBikeDesktop,
      videoMobile: ridingBikeMobile,
    },
     content: {
      title: 'No Frame Missed',
      description: "Accessibility",
    },
    
  
  }, 
  

]

export { cardCss,btnCss,homeHeroData,slideShowData,videoSlideShowData };

