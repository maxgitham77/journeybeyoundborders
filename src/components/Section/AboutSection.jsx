import React from 'react';
import Image from "next/image";

const AboutSection = () => {
    return (
        <div className="about-block lg:py-[100px] sm:py-16 py-20 bg-white">
            <div className="container">
                <div className="row flex max-lg:flex-col lg:items-center pag-y-6">
                    <div className="w-full lg:w-1/2">
                        <div className="bg-img w-full overflow-hidden rounded-3xl">
                            <Image
                                width={4000}
                                height={4000}
                                src="/images/about.jpg"
                                alt="image"
                                className="w-full h-full block"
                            />
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 flex-col lg:pl-20">
                        <div className="heading3">About us</div>
                        <div className="nav-infor mt-8">
                            <div className="title text-secondary mt-4">
                            We witnessed the aspirations and struggles of young people in developing countries 
                            who felt compelled to undertake treacherous journeys to Europe in search of better 
                            opportunities. We saw the power of knowledge and understanding in transforming lives 
                            and realized the potential for empowering youth to thrive in their own homelands. 
                            <br /><br />
                            Through workshops, awareness campaigns, and interactive sessions, we cultivate critical 
                            thinking and open dialogue. We invite individuals to question, challenge, and explore, 
                            empowering them to become agents of change within their communities. 
                            </div>
                        </div>
                        <div className="button-block flex items-center gap-5 md:mt-10 mt-6 pb-2">
                            <a href="#" className="button-main text-white bg-blue-800 hover-button-black text-button rounded-full">
                                Join us
                            </a>
                            <a href="#" className="button-main text-on-surface hover:bg-black hover:text-white hover:border-transparent bg-white text-button rounded-full border-2 border-blue-800 flex items-center gap-2">
                                +332 893 24 00
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;