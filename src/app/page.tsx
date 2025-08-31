import Image from "next/image";
import Header from "./component/Header";
import Hero from "./component/Hero";
import WorkManagement from "./component/WorkManagement";
import Footer from "./component/Footer";
import OurSponsors from "./component/OurSponsors";
import YourWork from "./component/YourWork";
import Section from "./component/Section";
import group214 from "@/app/assets/Group 214.png"
import imagecontainer from "@/app/assets/Image-container.png"
import CustomiseNeeds from "./component/CustomiseNeeds";
import CustomiseNeeds1 from "./component/CustomiseNeeds1";
export default function Home() {
  return (
    
    <div className=" relative width=[1922px] height[5669px] top=[-4239px] left[-961px] bg-[#FFFFFF]">
      <Header />
      <Hero />
      <WorkManagement />
      <CustomiseNeeds />
      <CustomiseNeeds1 />
      <YourWork />
      <OurSponsors />
      <Footer />
    </div>
  );
}
