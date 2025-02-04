import React from 'react';
import TopNav from "@/components/Header/TopNav/TopNav";
import Menu from "@/components/Header/Menu/Menu";
import Partner from "@/components/Partner/Partner";
import Footer from "@/components/Footer/Footer";
import Breadcrumb from "@/components/Section/Breadcrumb";
import AboutSection from "@/components/Section/AboutSection";
import Counter from "@/components/Section/Counter";
import Service from "@/components/Service/Service";
import serviceData from '@/data/service.json';
import Image from "next/image";

const DiscussionsPage = () => {
    return (
        <div className="overflow-x-hidden">
            <header id="header">
                <TopNav/>
                <Menu/>
            </header>

            <main className="content">
                <Breadcrumb
                    link="Our Services"
                    img="/images/header.webp"
                    title="Our Services"
                    description="The jobs report soundly beat expectations. The jobs report soundly beat expectations. The jobs report soundly beat expectations."
                />

                <div className="mt-[100px]">
                    <div className="container">
                        <div className="flex gap-8 max-lg:flex-col-reverse">
                            <div className="w-full lg:w-1/2 flex flex-col justify-between gap-5 pr-10">
                                <div className="heading3">
                                    Credit Card Management Use Wisely
                                    <div className="body2 text-secondary mt-4">
                                        The jobs report soundly beat expectations. The jobs report soundly beat
                                        expectations.
                                        The jobs report soundly beat expectations. The jobs report soundly beat
                                        expectations.
                                        The jobs report soundly beat expectations. The jobs report soundly beat
                                        expectations.
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2">
                                <div className="bg-img w-full overflow-hidden rounded-xl">
                                    <Image
                                        width={5000}
                                        height={5000}
                                        src="/images/assessment.webp"
                                        alt="image"
                                        className="w-full h-full block"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Service data={serviceData}  />
            </main>



            <Partner classname="lg:mt-[100] sm:mt-16 mt-10" />

            <footer id="footer">
                <Footer />
            </footer>
        </div>
    );
};

export default DiscussionsPage;