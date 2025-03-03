'use client'
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination} from "swiper/modules";
import  * as Icon from '@phosphor-icons/react/dist/ssr';
import Image from "next/image";
import Link from "next/link";
import 'swiper/css/bundle';

const Testimonial = () => {
    return (
        <>
            <div className="testimonial-block bg-slate-100">
                <div className="container">
                    <div className="testimonial-main bg-surface lg:pt-20 sm:pt-16 pt-10 lg:pb-12 pb-8 sm:my-16 my-10 lg:rounded-[40px] rounded-2xl flex items-center justify-center">
                        <div className="content sm:w-2/3 w-[85%]">
                            <div className="heading3 text-center">
                            The Impact of Our Work
                            </div>
                            <Swiper
                                spaceBetween={16}
                                slidesPerView={1}
                                loop={true}
                                pagination={{clickable: true}}
                                speed={400}
                                modules={[Pagination, Autoplay, Navigation]}
                                className='h-full relative lg:mt-10 mt-7'
                                autoplay={{
                                    delay: 4000
                                }}
                            >
                                <SwiperSlide className="lg:pb-24 pb-20">
                                    <div className="text-2xl font-medium text-center">
                                        {String.raw`"`}
                                        Before discovering Journey Beyond Borders, I believed that migrating to 
                                        Europe was my only chance at a better future. Their workshops opened my 
                                        eyes to the opportunities available in my own country. Thanks to their 
                                        support, I started a small business, and now I’m helping others in my 
                                        community thrive. I am forever grateful for their guidance!
                                        {String.raw`"`}
                                    </div>
                                    <div className="text-button text-center mt-5">
                                        — Samuel O., Ghana
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide className="lg:pb-24 pb-20">
                                    <div className="text-2xl font-medium text-center">
                                        {String.raw`"`}
                                        Journey Beyond Borders gave me access to training and education I never 
                                        thought possible. They helped me understand the risks of irregular migration 
                                        and showed me how I could build a future right where I am. Today, I work as 
                                        a graphic designer and mentor other young people in my town. This organization 
                                        truly changes lives!
                                        {String.raw`"`}
                                    </div>
                                    <div className="text-button text-center mt-5">
                                        — Fatima A., Sudan
                                    </div>
                                </SwiperSlide>

                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Testimonial;