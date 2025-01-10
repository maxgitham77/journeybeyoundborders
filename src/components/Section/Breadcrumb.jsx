import React from 'react';
import Image from "next/image";
import Link from "next/link";
import * as Icon from '@phosphor-icons/react/dist/ssr';

const Breadcrumb = ({ link, img, title, description }) => {
    return (
        <div className="breadcrumb-block w-full lg:h-[280px] sm:h-[300px] h-[320px] relative">
            <div className="bg-img w-full h-full absolute top-0 left-0 z-[-1]">
                <Image
                    width={4000}
                    height={4000}
                    src={img}
                    alt="image"
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="container relative h-full flex items-center">
                <div className="heading-nav flex items-center gap-1 absolute top-8 left-4 py-2 px-4 rounded-full bg-line bg-slate-600">
                    <Link className="hover:underline caption1 text-white" href="/">
                        Home
                    </Link>
                    <Icon.CaretDoubleRight className="text-white" />
                    <div className="caption1 text-white">{link}</div>
                </div>
                <div className="text-nav xl:w-1/2 md:w-3/5">
                    <div className="heading3 text-white">{title}</div>
                    <div className="sub-heading mt-4 font-normal text-white">{description}</div>
                </div>
            </div>
        </div>
    );
};

export default Breadcrumb;