import Menu from "@/components/Header/Menu/Menu";
import TopNav from "@/components/Header/TopNav/TopNav";
import Slider from "@/components/Slider/Slider";
import Image from "next/image";
import Service from "@/components/Service/Service";
import serviceData from '@/data/service.json';
import PaymentGateway from "@/components/PaymentGateway/PaymentGateway";
import CaseStudy from "@/components/CaseStudy/CaseStudy";
import PaymentGatewayTwo from "@/components/PaymentGatewayTwo/PaymentGatewayTwo";
import RequestCallForm from "@/components/RequestCallForm/RequestCallForm";
import Testimonial from "@/components/Testimonial/Testimonial";
import Blog from "@/components/Blog/Blog";
import blogData from "@/data/blog.json";
import Partner from "@/components/Partner/Partner";
import Footer from "@/components/Footer/Footer";
import "../styles/footer.scss";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <header id="header">
        <TopNav suppressHydrationWarning={true} />
        <Menu suppressHydrationWarning={true} />
      </header>

      <main className="content">

        <Slider suppressHydrationWarning={true} />
        <Service data={serviceData} suppressHydrationWarning={true} />
        <PaymentGateway suppressHydrationWarning={true} />
        <CaseStudy suppressHydrationWarning={true} />
        <PaymentGatewayTwo suppressHydrationWarning={true} />
        <RequestCallForm suppressHydrationWarning={true} />
        <Testimonial suppressHydrationWarning={true} />
        <Blog data={blogData} suppressHydrationWarning={true} />
      </main>

      <Partner className="lg:mt-[100] sm:mt-16 mt-10" suppressHydrationWarning={true} />

      <footer id="footer">
          <Footer suppressHydrationWarning={true} />
      </footer>

    </div>
  );
}
