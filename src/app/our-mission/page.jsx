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
                    link="Our Mission"
                    img="/images/header.webp"
                    title="Creating Opportunities"
                    description="By providing knowledge, resources, and sustainable opportunities, we empower individuals to build a better life at home, reducing the risks of unsafe migration."
                />

                <div className="mt-[100px]">
                    <div className="container">
                        <div className="flex gap-8 max-lg:flex-col-reverse">
                            <div className="w-full lg:w-1/2 flex flex-col justify-between gap-5 pr-10">
                                <div className="heading3">
                                Our Mission – Empowering Choices, Creating Opportunities
                                    <div className="body2 text-secondary mt-4">
                                    At Journey Beyond Borders, our mission is to educate, empower, and support individuals 
                                    in making informed decisions about their future. Many young people believe that 
                                    migrating to Europe is the only way to achieve a better life, often unaware of the 
                                    risks and challenges they may face along the way. We strive to provide them with the 
                                    knowledge, resources, and opportunities needed to build successful futures in their 
                                    home countries, reducing the dangers of irregular migration.
                                    <br /><br />
                                    We believe that access to reliable information is key to making informed choices. 
                                    Misinformation about migration is widespread, leading many young people to embark on 
                                    dangerous journeys based on false promises. Through education programs, workshops, 
                                    and awareness campaigns, we provide clear and accurate insights into the realities 
                                    of migration, helping individuals weigh their options and explore safer alternatives.
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2">
                                <div className="bg-img w-full overflow-hidden rounded-xl">
                                    <Image
                                        width={5000}
                                        height={5000}
                                        src="/images/mission.jpg"
                                        alt="image"
                                        className="w-full h-full block"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                <div className="body2 text-secondary mt-4 mb-10">
                Beyond awareness, we focus on economic empowerment. One of the main reasons young people leave 
                their home countries is the lack of economic opportunities. Our mission includes supporting 
                local entrepreneurship, skill-building programs, and job creation initiatives. By equipping 
                young people with the skills and resources they need, we help them create sustainable livelihoods 
                in their communities.
                <br /><br />
                Community development is at the heart of our work. We collaborate with local organizations, 
                businesses, and governments to strengthen communities and create environments where young 
                people can thrive. By investing in education, infrastructure, and economic development, 
                we work towards long-term solutions that reduce the need for migration as a last resort.
                <br /><br />
                We also advocate for policies that support safe and legal migration pathways. While our goal 
                is to help individuals find opportunities at home, we recognize that migration will always be 
                a part of human history. We work to ensure that those who choose to migrate do so through safe, 
                legal, and informed processes, minimizing risks such as exploitation and trafficking.
                <br /><br />
                Our mission extends beyond individuals—we aim to shift perspectives on migration at a societal 
                level. By fostering cross-cultural understanding, we encourage open discussions about the 
                benefits and challenges of migration. We work to break down stereotypes and promote a balanced 
                view that respects the rights and dignity of migrants while addressing the root causes of forced 
                migration.
                <br /><br />
                Through mentorship and guidance, we empower young leaders who can inspire change within their own 
                communities. We believe in the power of role models—those who have successfully built lives at 
                home despite challenges. By highlighting success stories and connecting youth with mentors, we 
                create a support system that encourages resilience and innovation.
                <br /><br />
                At Journey Beyond Borders, we envision a world where migration is a choice, not a necessity. 
                We remain committed to providing the knowledge, resources, and support needed to make this 
                vision a reality. By working together, we can create a future where young people feel empowered 
                to pursue their dreams without risking their lives in search of uncertain opportunities abroad.
                <br /><br />
                </div>
                </div>
            </main>



            <Partner classname="lg:mt-[100] sm:mt-16 mt-10" />

            <footer id="footer">
                <Footer />
            </footer>
        </div>
    );
};

export default DiscussionsPage;