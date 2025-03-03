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

const ServicePage = () => {
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
                    title="Guiding Paths"
                    description="From migration awareness to skill development and entrepreneurship programs, our services are designed to create safer and more sustainable futures in their home countries."
                />

                <div className="mt-[100px]">
                    <div className="container">
                        <div className="flex gap-8 max-lg:flex-col-reverse">
                            <div className="w-full lg:w-1/2 flex flex-col justify-between gap-5 pr-10">
                                <div className="heading3">
                                    Our Services
                                    <div className="body2 text-secondary mt-4">
                                    At Journey Beyond Borders, our services are designed to empower individuals with 
                                    the knowledge and opportunities they need to build a better future at home. 
                                    We provide educational programs that raise awareness about the realities of 
                                    migration, helping young people make informed decisions instead of risking 
                                    dangerous and uncertain journeys. Through workshops, mentorship, and access 
                                    to credible information, we guide individuals toward safer and more sustainable 
                                    pathways for personal and professional growth.
                                    <br /><br />
                                    Beyond education, we focus on skill development and economic empowerment. 
                                    Our entrepreneurship programs equip young people with the tools and resources 
                                    needed to start their own businesses, fostering self-reliance and economic 
                                    stability in their communities. We also collaborate with local organizations 
                                    to create job opportunities and vocational training programs, ensuring that 
                                    individuals have viable alternatives to migration. By investing in people, 
                                    we help build stronger, more resilient communities where success is possible 
                                    without leaving home.
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2">
                                <div className="bg-img w-full overflow-hidden rounded-xl">
                                    <Image
                                        width={5000}
                                        height={5000}
                                        src="/images/services.jpg"
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

export default ServicePage;