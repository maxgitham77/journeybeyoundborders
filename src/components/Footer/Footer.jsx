import React from 'react';
import Image from "next/image";
import Link from "next/link";
import * as Icon from '@phosphor-icons/react/dist/ssr';

const Footer = () => {
    return (
        <div className="footer-block bg-[#0f1e33] pt-[60px]">
            <div className="container">
                <div className="flex max-lg:flex-col max-lg:items-start gap-y-10 pb-10">
                    <div className="lg:w-1/4">
                        <div className="footer-company-infor flex flex-col justify-between gap-5">
                            <Image
                                width={4000}
                                height={4000}
                                src="/images/LogoWhite.png"
                                alt="image"
                                className="footer-logo w-[145px]"
                            />
                            <div className="text caption1 text-white">
                            Our goal is to empower young people with knowledge, resources, 
                            and opportunities to build a better future in their home countries.
                            </div>
                            <div className="list-social flex items-center gap-2">
                                <Link
                                    className="item rounded-full w-7 h-7 border-2 border-gray flex items-center justify-center"
                                    href="/">
                                    <i className="icon-facebook text-sm"></i>
                                </Link>
                                <Link
                                    className="item rounded-full w-7 h-7 border-2 border-gray flex items-center justify-center"
                                    href="/">
                                    <i className="icon-in text-sm"></i>
                                </Link>
                                <Link
                                    className="item rounded-full w-7 h-7 border-2 border-gray flex items-center justify-center"
                                    href="/">
                                    <i className="icon-twitter text-sm"></i>
                                </Link>
                                <Link
                                    className="item rounded-full w-7 h-7 border-2 border-gray flex items-center justify-center"
                                    href="/">
                                    <i className="icon-youtube text-sm"></i>
                                </Link>
                                <Link
                                    className="item rounded-full w-7 h-7 border-2 border-gray flex items-center justify-center"
                                    href="/">
                                    <i className="icon-insta text-sm"></i>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/2">
                        <div className="footer-navigate flex items-center justify-center gap-20">
                            <div className="footer-nav-item">
                                <div className="item-heading text-button-sm text-white">
                                    Quick Links
                                </div>
                                <ul className="list-nav mt-1 text-white">
                                    <li className="mt-3">
                                        <Link
                                            className="caption1 has-line-before line-white text-surface hover-underline"
                                            href="/">
                                            Membership
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="caption1 has-line-before line-white text-surface hover-underline"
                                            href="/">
                                            FAQ
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="caption1 has-line-before line-white text-surface hover-underline"
                                            href="/">
                                            Donate
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="caption1 has-line-before line-white text-surface hover-underline"
                                            href="/">
                                            Get Involved
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="footer-nav-item max-sm:hidden">
                                <div className="item-heading text-button-sm text-white">
                                    Pages
                                </div>
                                <ul className="list-nav mt-1 text-white">
                                    <li className="mt-3">
                                        <Link
                                            className="caption1 has-line-before line-white text-surface hover-underline"
                                            href="/">
                                            About Us
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="caption1 has-line-before line-white text-surface hover-underline"
                                            href="/">
                                            Services
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="caption1 has-line-before line-white text-surface hover-underline"
                                            href="/">
                                            Case Studies
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="caption1 has-line-before line-white text-surface hover-underline"
                                            href="/">
                                            Contact
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="footer-nav-item">
                                <div className="item-heading text-button-sm text-white">
                                    Blog
                                </div>
                                <ul className="list-nav mt-1 text-white">
                                    <li className="mt-3">
                                        <Link
                                            className="caption1 has-line-before line-white text-surface hover-underline"
                                            href="/">
                                            Migration
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="caption1 has-line-before line-white text-surface hover-underline"
                                            href="/">
                                            Local Opportunuties
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="caption1 has-line-before line-white text-surface hover-underline"
                                            href="/">
                                            Case Studies
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="caption1 has-line-before line-white text-surface hover-underline"
                                            href="/">
                                            Education
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>

                    <div className="lg:w-1/4">
                        <div className="company-contact">
                            <div className="heading text-button-sm text-white">
                                NewsLetter
                            </div>
                            <div className="mt-3 flex items-start">
                                <div className="text">
                                    <div className="caption2 text-surface text-white">
                                        Need Help? 24/7
                                    </div>
                                    <div className="fw-700 text-white mt-1">
                                        +32 2 893 24 00
                                    </div>
                                </div>

                            </div>

                            <div className="locate mt-3 flex items-center">
                                <div className="caption1 text-surface text-white">
                                    Regus Brussels,
                                    Konradstraat 11 Rue des Straat (1st floor)
                                    1000 Brussels, Belgium
                                </div>
                            </div>

                            <form className="send-block mt-5 flex items-center h-[45px] rounded-lg overflow-hidden">
                                <input className="caption1 text-secondary h-full w-full pr-4 pl-3" type="text"
                                       placeholder="Your Email Address"/>
                                <button type="submit"
                                        className="flex items-center justify-center w-[45px] h-[45px] bg-blue-800 flex-shrink-0">
                                    <Icon.PaperPlaneTilt className="text-white"/>
                                </button>
                            </form>

                        </div>
                    </div>
                </div>

                <div className="border-line"></div>

                <div className="footer-bottom flex items-center justify-between pt-3 pb-3">
                    <div className="left-block flex items-center">
                        <div className="copy-right text-surface caption1 text-white">
                            @2025 JBB. All Rights Reserved
                        </div>
                    </div>
                    <div className="nav-link flex items-center gap-3 text-white">
                        <a href="/" className="text-surface caption1 hover-underline">
                            Terms of Services
                        </a>
                        <span className="text-surface caption1">|</span>
                        <a href="/" className="text-surface caption1 hover-underline">
                            Privacy Policy
                        </a>
                        <span className="text-surface caption1">|</span>
                        <a href="/" className="text-surface caption1 hover-underline">
                            Cookies Policy
                        </a>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default Footer;