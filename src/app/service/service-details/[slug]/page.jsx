import React from 'react';
import TopNav from "@/components/Header/TopNav/TopNav";
import Menu from "@/components/Header/Menu/Menu";
import Partner from "@/components/Partner/Partner";
import Footer from "@/components/Footer/Footer";
import Breadcrumb from "@/components/Section/Breadcrumb";
import Image from "next/image";
import Link from "next/link";

const ServiceDetails = ({ slug }) => {
    return (
        <div className="overflow-x-hidden">
            <header id="header">
                <TopNav/>
                <Menu/>
            </header>

            <main className="content">
                <Breadcrumb
                    link="Our Service Details"
                    img="/images/header.webp"
                    title="Our Service Details"
                    description="The jobs report soundly beat expectations. The jobs report soundly beat expectations. The jobs report soundly beat expectations."
                />

                <div className="content-detail-block lg:py-[100px] sm:py-16 py-10">
                    <div className="container">
                        <div className="flex max-xl:flex-col gap-y-8">

                            <div className="w-full xl:w-3/4">
                                <div className="w-full xl:pr-[80px]">
                                    <div className="heading3">
                                        Cryptocurrency Trading
                                    </div>
                                    <div className="bg-img mt-5 mb-5">
                                        <Image
                                            width={5000}
                                            height={5000}
                                            src="/images/assessment.webp"
                                            className="w-full h-full rounded-xl"
                                            alt="image"
                                        />
                                    </div>
                                    <div className="body2 text-secondary mt-4">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid
                                        at beatae debitis deleniti dolorem earum eveniet ex excepturi fuga in ipsum
                                        iusto laborum magni maiores minima molestias natus neque nesciunt, nisi nulla
                                        obcaecati omnis possimus praesentium quas, repellat repellendus reprehenderit
                                        repudiandae sequi tempora tenetur unde vitae voluptate voluptates, voluptatibus.

                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid
                                        at beatae debitis deleniti dolorem earum eveniet ex excepturi fuga in ipsum
                                        iusto laborum magni maiores minima molestias natus neque nesciunt, nisi nulla
                                        obcaecati omnis possimus praesentium quas, repellat repellendus reprehenderit
                                        repudiandae sequi tempora tenetur unde vitae voluptate voluptates, voluptatibus.
                                    </div>
                                </div>
                            </div>

                            <div className="w-full xl:w-1/4">
                                <div className="more-infor border border-line rounded-xl py-8 px-8">
                                    <div className="heading6">
                                        The best mission is what you contribute to our mission
                                    </div>
                                    <div className="body3 text-secondary mt-2">
                                        repudiandae sequi tempora tenetur unde vitae voluptate voluptates, voluptatibus
                                    </div>
                                    <div className="list-nav mt-4">
                                        <Link className="nav-item rounded-lg flex-between p-12" href="/">
                                            <div className="text-button text-secondary">
                                                payment solution
                                            </div>
                                        </Link>
                                        <Link className="nav-item rounded-lg flex-between p-12" href="/">
                                            <div className="text-button text-secondary">
                                                personal planning
                                            </div>
                                        </Link>
                                        <Link className="nav-item rounded-lg flex-between p-12" href="/">
                                            <div className="text-button text-secondary">
                                                online banking
                                            </div>
                                        </Link>
                                        <Link className="nav-item rounded-lg flex-between p-12" href="/">
                                            <div className="text-button text-secondary">
                                                financial investment
                                            </div>
                                        </Link>
                                        <Link className="nav-item rounded-lg flex-between p-12" href="/">
                                            <div className="text-button text-secondary">
                                                blockchain
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <div className="ads-block rounded-lg md:mt-10 mt-6 relative">
                                    <div className="bg-img">
                                        <Image
                                            width={5000}
                                            height={5000}
                                            src="/images/ads.webp"
                                            alt="image"
                                        />
                                    </div>
                                    <div className="text flex flex-col justify-between absolute left-0 top-0 w-full h-full p-8">
                                        <div className="title">
                                            <div className="headings text-white">
                                                Let's Talk
                                            </div>
                                            <div className="body3 text-white mt-4">
                                                If you have want join us,<br /> please contact us.
                                            </div>
                                        </div>
                                        <div className="button-block md:mt-10 mt-6">
                                            <Link className="button-main hover:bg-black hover:text-white-block bg-white text-button" href="/contact">
                                                Contact Us
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </main>


            <Partner classname="lg:mt-[100] sm:mt-16 mt-10"/>

            <footer id="footer">
                <Footer/>
            </footer>
        </div>
    );
};

export default ServiceDetails;