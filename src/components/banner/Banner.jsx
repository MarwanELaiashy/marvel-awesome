import React, { useContext, useState } from 'react'
import image1 from "../../images/1.jpg"
import image2 from "../../images/2.jpg"
import image3 from "../../images/3.jpg"
import { IsMobileContext } from '../../features/IsMobileContext'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/thumbs";
import { motion } from "framer-motion";
const Banner = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const {isMobile} = useContext(IsMobileContext);
  return (
    <div className='banner'>
      <Swiper slidesPerView={1} modules={[Thumbs, Autoplay]} thumbs={{swiper: thumbsSwiper, }} autoplay={{delay: 3000, }} loop={true}>
        <SwiperSlide>
          <div className='banner-image'>
            <motion.img initial={{opacity:0}} whileInView={{opacity: .6}} transition={{delay:0, duration: 1, staggerChildren: .25}} src={image1} alt=''/>
            <div className='banner-text'>
              <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 1 }}>Lorem, ipsum dolor sit amet</motion.h2>
              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 1, staggerChildren: 0.25 }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quibusdam dolores odit repellendus eligendi sunt iure?</motion.p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='banner-image'>
            <motion.img src={image2} initial={{ opacity: 0 }} whileInView={{ opacity: 0.6 }} transition={{ delay: 0, duration: 1, staggerChildren: 0.25 }} alt=''/>
            <div className='banner-text'>
              <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 1 }}>Lorem, ipsum dolor sit amet</motion.h2>
              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 1 }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quibusdam dolores odit repellendus eligendi sunt iure?</motion.p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='banner-image'>
            <motion.img src={image3} initial={{ opacity: 0 }} whileInView={{ opacity: 0.6 }} transition={{ delay: 0, duration: 1, staggerChildren: 0.25 }} alt=''/>
            <div className='banner-text'>
              <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 1 }}>Lorem, ipsum dolor sit amet</motion.h2>
              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 1 }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quibusdam dolores odit repellendus eligendi sunt iure?</motion.p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
        {!isMobile ? (
          <Swiper className="banner-thumbs" modules={[Thumbs]} slidesPerView={3} spaceBetween={10} onSwiper={setThumbsSwiper} watchSlidesProgress={true}>
            <SwiperSlide>
              <motion.div className='thumbs' initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 1, staggerChildren: 0.25 }}>
                <img src={image1} alt=''/>
              </motion.div>
            </SwiperSlide>
            <SwiperSlide>
              <motion.div className='thumbs' initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 1, staggerChildren: 0.25 }}>
                <img src={image2} alt=''/>
              </motion.div>
            </SwiperSlide>
            <SwiperSlide>
              <motion.div className='thumbs' initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 1, staggerChildren: 0.25 }}>
                <img src={image3} alt=''/>
              </motion.div>
            </SwiperSlide>
          </Swiper>
      ) : ("")}
    </div>
  );
};

export default Banner;
