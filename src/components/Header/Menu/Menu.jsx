'use client'
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import * as Icon from '@phosphor-icons/react/dist/ssr';

const Menu = () => {
    const pathname = usePathname();
    const [fixedHeader, setFixedHeader] = useState(false);
    const [openMobileMenu, setOpenMobileMenu] = useState(false);

    return (
        <>
           <div className={`header-menu bg-white ${fixedHeader ? 'fixed' : ''}`}>
                <div className='container flex items-center justify-between h-20'>
                    <Link className='menu-left-block' href="/">
                        <Image 
                            src={'/images/Logo.png'}
                            width={2000}
                            height={1000}
                            alt='logo'
                            priotity={true}
                            className='w-[149px] max-sm:w-[132px]'
                        />
                    </Link>
                    <div className='menu-center-block h-full'>
                        <ul className='menu-nav flex items-center xl:gap-2 h-full'>
                            <li className={`nav-item h-full flex items-center justify-center home ${pathname === '/' ? 'active' : ''}`}>
                                <Link className='nav-link text-title flex items-center gap-1' href={"/"}>
                                    <span>Home</span>
                                </Link>
                            </li>
                            <li className={`nav-item h-full flex items-center justify-center home ${pathname === '/about' ? 'active' : ''}`}>
                                <Link className='nav-link text-title flex items-center gap-1' href={"/about"}>
                                    <span>About</span>
                                </Link>
                            </li>

                            <li className={`nav-item h-full flex items-center justify-center home ${pathname === '/discussions' ? 'active' : ''}`}>
                                <Link className='nav-link text-title flex items-center gap-1' href={""}>
                                    <span>Discussions</span>
                                </Link>
                            </li>
                            <li className={`nav-item h-full flex items-center justify-center home ${pathname === '/service' ? 'active' : ''}`}>
                                <Link className='nav-link text-title flex items-center gap-1' href={"/service"}>
                                    <span>Our Services</span>
                                </Link>
                            </li>
                            <li className={`nav-item h-full flex items-center justify-center home ${pathname === '/our-mission' ? 'active' : ''}`}>
                                <Link className='nav-link text-title flex items-center gap-1' href={"/our-mission"}>
                                    <span>Our Mission</span>
                                </Link>
                            </li>
                            <li className={`nav-item h-full flex items-center justify-center home ${pathname === '/blog' ? 'active' : ''}`}>
                                <Link className='nav-link text-title flex items-center gap-1' href={"/blog"}>
                                    <span>Blog</span>
                                </Link>
                            </li>
                            <li className={`nav-item h-full flex items-center justify-center home ${pathname === '/contact' ? 'active' : ''}`}>
                                <Link className='nav-link text-title flex items-center gap-1' href={"/contact"}>
                                    <span>Contact Us</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className='menu-right-block flex items-center'>
                        <div className='icon-call'>
                            <i className='icon-phone-call text-4xl'></i>
                        </div>
                        <div className='text ml-3'>
                                <div className='text caption1'> Free Consultancy</div>
                                <div className='text caption1'> +32 2 893 24 00</div>
                        </div>
                        <div className='menu-hamburger hidden pointer' onClick={() => setOpenMobileMenu(!openMobileMenu)}>
                            <Icon.List className='text-2xl' weight='bold' />
                        </div>
                    </div>
                </div>

                <div id='menu-mobile-block' className={` ${openMobileMenu && 'open'}`}>
                    <div className='menu-mobile-main'>
                        <div className='container'>
                            <ul className='menu-nav-mobile h-full pt-1 pb-1'>
                                <li className='nav-item-mobile h-full flex-column gap-2 pt-2 pl-3 pr-3 pb-2 pointer'>
                                    <a className='nav-link-mobile flex items-center justify-between' href='/'>
                                        <span className='body2 font-bold'>Home</span>  
                                    </a>    
                                </li>
                                <li className='nav-item-mobile h-full flex-column gap-2 pt-2 pl-3 pr-3 pb-2 pointer'>
                                    <a className='nav-link-mobile flex items-center justify-between' href='/about'>
                                        <span className='body2 font-bold'>About</span>  
                                    </a>    
                                </li>
                                <li className='nav-item-mobile h-full flex-column gap-2 pt-2 pl-3 pr-3 pb-2 pointer'>
                                    <a className='nav-link-mobile flex items-center justify-between' href='/service'>
                                        <span className='body2 font-bold'>Our Mission</span>
                                    </a>    
                                </li>
                                <li className='nav-item-mobile h-full flex-column gap-2 pt-2 pl-3 pr-3 pb-2 pointer'>
                                    <a className='nav-link-mobile flex items-center justify-between' href='/case-studies'>
                                        <span className='body2 font-bold'>Disussion</span>
                                    </a>    
                                </li>
                                <li className='nav-item-mobile h-full flex-column gap-2 pt-2 pl-3 pr-3 pb-2 pointer'>
                                    <a className='nav-link-mobile flex items-center justify-between' href='/blog'>
                                        <span className='body2 font-bold'>Blog</span>  
                                    </a>    
                                </li>
                                <li className='nav-item-mobile h-full flex-column gap-2 pt-2 pl-3 pr-3 pb-2 pointer'>
                                    <a className='nav-link-mobile flex items-center justify-between' href='/contact'>
                                        <span className='body2 font-bold'>Contact us</span>  
                                    </a>    
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div> 
        </>
    );
};

export default Menu;