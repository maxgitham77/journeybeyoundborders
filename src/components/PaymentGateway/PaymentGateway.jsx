'use client'
import React, {useRef} from 'react';
import {useInView} from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import * as Icon from '@phosphor-icons/react/dist/ssr';

const PaymentGateway = () => {

    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});

    return (
        <div>
            <section className='payment-gateway-one style-first lg:mt-[100px] sm:mt-16 mt-10 bg-surface relative bg-slate-300'>
                <div className='bg-img lg:absolute top-0 left-0 lg:w-1/2 w-full h-full flex-shrink-0'>
                    <Image
                        src="/images/frontgate.jpg"
                        width={5000}
                        height={4000}
                        alt='image'
                        className='w-full h-full object-cover'
                    />
                </div>

                <div className='container w-full lg:py-[150px] pt-14 px-16'>
                    <div className='w-full flex items-center lg:justify-end' ref={ref}>
                        <div className='payment-infor lg:w-1/2 xl:pl-20 lg:pl-10' style={{
                            transform: isInView ? "none" : "translateY(60px)",
                            opacity: isInView ? 1 : 0,
                            transition: 'all 0.7s cubic-bezier(0.17,0.55,0.55,1) 0.3s,'
                        }}>
                            <div className='heading flx items-center gap-4 max-lg:flex-wrap'>
                                <div className='flex items-center'>
                                    <div className='img sm:w-12 w-10 sm:h-12 h-10 rounded-full overflow-hidden bg-line p-0 z-[3]'>
                                        <Image className='full h-full rounded-full' width={300} height={300} src={"/images/avatar3.webp"} alt='image' />
                                    </div>
                                </div>

                                <div className='text-button text-secodary'>
                                    Marcel Reinhardt<br /> CEO & Consultant.
                                </div>
                            </div>
                            <div className='text lg:mt-14 mt-5'>
                                <h3 className='heading3'>Message from the CEO</h3>
                                <div className='body3 text-secondary lg:mt-6 mt-4'>
                                At Journey Beyond Borders, we believe that knowledge empowers individuals to make informed decisions about their future. Our mission is to provide young people in developing countries with the resources, education, and support they need to explore opportunities safely—at home. Together, we can build a world where migration is a choice, not a necessity.
                                </div>
                            </div>
                            <div className='flex button-block items-center max-sm:flex-wrap sm:gap-6 gap-3 lg:mt-12 mt-8 w-fit'>
                                <Link className='button-main box-shadow bg-blue-700 hover:bg-black text-white bg-blue whitespace-nowrap rounded-full' href='/'>
                                    Join us
                                </Link>
                                <div className='relative'>
                                    <Link className='button-main box-shadow hover:bg-black hover:text-white text-on-surface bg-white flex items-center gap rounded-full relative z-[1]' href='/'>
                                        <Icon.Phone weight='fill' className='text-xl' />
                                        <span className='whitespace-nowrap'>+3 (0)22 65765439</span>
                                    </Link>
                                    <Image
                                        src='/images/component/gateway1-dot.png'
                                        className='absolute -right-12 w-[100px] h-auto top-1/2 -translate-y-1/2'
                                        width={4000}
                                        height={4000}
                                        alt='image'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    );
};

export default PaymentGateway;