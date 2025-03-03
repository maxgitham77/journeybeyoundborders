import React from 'react';
import Link from "next/link";
import * as Icon from '@phosphor-icons/react/dist/ssr';
import Image from "next/image";

const CaseStudy = () => {
    return (
        <div>
            <section className='case-study-block style-one lg:pt-[100px] sm:pt-16 pt-10'>
                <div className='container'>
                    <div className='heading text-center'>
                        <h3 className='heading3'>Case Study</h3>
                        <div className='right flex flex-col items-center gap-2 mt-3'>
                            <div className='body3'>
                                Experiences that shape lifes
                            </div>
                            <Link className='flex items-center gap-2 hover:text-blue duration-300' href='/'>
                                <div className='text-button'>View All Case List</div>
                                <Icon.CaretDoubleRight weight='bold' className='text-xs mt-1' />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className='list-case-study md:mt-10 mt-6'>
                    <div className='list grid lg:grid-cols-4 sm:grid-cols-2'>

                        <div className='w-full'>
                            <div className='case-study-item'>
                                <div className='bg-img'>
                                    <Image
                                        src='/images/Case2.jpg'
                                        width={5000}
                                        height={5000}
                                        className='w-full h-full block'
                                        alt='image'
                                    />
                                </div>
                                <div className='text flex flex-col justify-between gap-3'>
                                    <div className='heading5'>
                                        <Link className='text-white' href='/'>
                                        A Young Entrepreneur’s Success
                                        </Link>
                                    </div>
                                    <div className='text-white body2'>
                                    Maria, a 22-year-old from Guatemala, once dreamed of migrating to the U.S. However, after
                                    </div>
                                    <Link className='flex items-center gap-1' href='/'>
                                        <div className='text-button text-white'>
                                            Read More
                                        </div>
                                        <Icon.CaretDoubleRight weight='bold' className='text-xs text-white mt-1'/>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className='w-full'>
                            <div className='case-study-item'>
                                <div className='bg-img'>
                                    <Image
                                        src='/images/Case.jpg'
                                        width={5000}
                                        height={5000}
                                        className='w-full h-full block'
                                        alt='image'
                                    />
                                </div>
                                <div className='text flex flex-col justify-between gap-3'>
                                    <div className='heading5'>
                                        <Link className='text-white' href='/'>
                                        A Young Man’s Dangerous Journey
                                        </Link>
                                    </div>
                                    <div className='text-white body2'>
                                    Kweme, a 19-year-old from West Africa, left his home with hopes of reaching Europe 
                                    {/*for a better life. After enduring human traffickers, extreme desert conditions, 
                                    and detention in Libya, he realized the harsh realities of irregular migration. 
                                    His story sheds light on the dangers faced by migrants and the importance of making 
                                    informed choices.*/}
                                    </div>
                                    <Link className='flex items-center gap-1' href='/'>
                                        <div className='text-button text-white'>
                                            Read More
                                        </div>
                                        <Icon.CaretDoubleRight weight='bold' className='text-xs text-white mt-1'/>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className='w-full'>
                            <div className='case-study-item'>
                                <div className='bg-img'>
                                    <Image
                                        src='/images/Case3.jpg'
                                        width={5000}
                                        height={5000}
                                        className='w-full h-full block'
                                        alt='image'
                                    />
                                </div>
                                <div className='text flex flex-col justify-between gap-3'>
                                    <div className='heading5'>
                                        <Link className='text-white' href='/'>
                                        The Power of Education
                                        </Link>
                                    </div>
                                    <div className='text-white body2'>
                                    Lucky fled conflict in his home country and arrived in Uganda as a refugee. With the help 
                                    </div>
                                    <Link className='flex items-center gap-1' href='/'>
                                        <div className='text-button text-white'>
                                            Read More
                                        </div>
                                        <Icon.CaretDoubleRight weight='bold' className='text-xs text-white mt-1'/>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className='w-full'>
                            <div className='case-study-item'>
                                <div className='bg-img'>
                                    <Image
                                        src='/images/Case4.jpg'
                                        width={5000}
                                        height={5000}
                                        className='w-full h-full block'
                                        alt='image'
                                    />
                                </div>
                                <div className='text flex flex-col justify-between gap-3'>
                                    <div className='heading5'>
                                        <Link className='text-white' href='/'>
                                        How a Family Was Misled About Migration
                                        </Link>
                                    </div>
                                    <div className='text-white body2'>
                                    Asha’s family in Ethiopia sold their land to pay smugglers who promised her a
                                    </div>
                                    <Link className='flex items-center gap-1' href='/'>
                                        <div className='text-button text-white'>
                                            Read More
                                        </div>
                                        <Icon.CaretDoubleRight weight='bold' className='text-xs text-white mt-1'/>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </section>
        </div>
    );
};

export default CaseStudy;