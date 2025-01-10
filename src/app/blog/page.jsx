import React from 'react';
import TopNav from "@/components/Header/TopNav/TopNav";
import Menu from "@/components/Header/Menu/Menu";
import Partner from "@/components/Partner/Partner";
import Footer from "@/components/Footer/Footer";
import Breadcrumb from "@/components/Section/Breadcrumb";
import blogData from '@/data/blog.json';
import Image from "next/image";
import BlogList from "@/components/Section/BlogList";

const BlogPage = () => {
    return (
        <div className="overflow-x-hidden">
            <header id="header">
                <TopNav/>
                <Menu/>
            </header>

            <main className="content">
                <Breadcrumb
                    link="Our Blog"
                    img="/images/header.webp"
                    title="Our Blog"
                    description="The jobs report soundly beat expectations. The jobs report soundly beat expectations. The jobs report soundly beat expectations."
                />

                <BlogList data={blogData} />

            </main>



            <Partner classname="lg:mt-[100] sm:mt-16 mt-10" />

            <footer id="footer">
                <Footer />
            </footer>
        </div>
    );
};

export default BlogPage;