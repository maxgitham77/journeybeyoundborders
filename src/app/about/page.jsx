'use client'
import React, {useEffect, useState} from 'react';
import TopNav from "@/components/Header/TopNav/TopNav";
import Menu from "@/components/Header/Menu/Menu";
import Partner from "@/components/Partner/Partner";
import Footer from "@/components/Footer/Footer";
import Breadcrumb from "@/components/Section/Breadcrumb";
import AboutSection from "@/components/Section/AboutSection";
import Counter from "@/components/Section/Counter";
import Service from "@/components/Service/Service";
import serviceData from '@/data/service.json';
import Loader from "@/components/Loader/Loader";

const AboutPage = () => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 5000)
        return () => clearTimeout(timer)
    }, [])

    return (
        <div className="overflow-x-hidden">
            <header id="header">
                <TopNav/>
                <Menu/>
            </header>

            <main className="content">
                {loading ? (
                    <div className="flex justify-center items-center h-[500px]">
                        <Loader />
                    </div>
                ) : (
                    <>
                        <Breadcrumb
                            link="About Us"
                            img="/images/header.webp"
                            title="Empowering Informed Choices"
                            description="We are dedicated to educating and empowering young people with the knowledge they need to make informed decisions about their future."
                        />
                        <AboutSection />
                       
                        <Service data={serviceData}  />
                    </>
                )
                }

            </main>

            <Partner classname="lg:mt-[100] sm:mt-16 mt-10" />

            <footer id="footer">
                <Footer />
            </footer>
        </div>
);
};

export default AboutPage;