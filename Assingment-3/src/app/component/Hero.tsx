import Image from "next/image";
import vector from "@/app/assets/Vector.png"
import line from "@/app/assets/Vector-1.png"
import imagecontainer from "@/app/assets/Image-container.png"
const Hero = () => {
    return(
        <div className="width-[1920px] height-[829px]  top-[92px] left-[1px] px-[220px] py-[140px] bg-[#043873] flex gap-2">
            {/* Heading Part */}
            <div className="width-[656px] height-[361px] gap-[60px] text-[#FFFFFF]">
                <div className="width-[656px] height-[238px] gap-6 ">
                        <h2 className="width-[656px] height-[154px] font-bold text-[64px] leading-[77.45px] tracking-[-0.02em] ">Get More Done with whitepace</h2>
                        </div>
                            <p className="width-[656px] height-[60px]font-normal text-lg tracking-[-0.02em] leading-[30px]">Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks</p>
                             {/* Button */}
                <button className="width-[219px] height-[63px] rounded-lg p-5 gap-[10px] bg-[#4F9CF9] flex item-center">
                    <p className="widht-[159px] height-[23px] font-medium text-lg leading-[23px] tracking-[-0.02em]">Try Whitepace free</p>
                    <div className="width-[10px] height-[23px] border-solid border-[#FFFFFF] flex  relative">
                    <div className=" width-[10px] height-[10px] top-[49.5%] left-[-5px] absolute">
                            <Image src={line} alt="vector-1"></Image>
                        </div>
                        <div className="width-[5px] heigth-[10px] top-[26.5px] left-[194px] ">
                            <Image src={vector} alt="vector"></Image>
                        </div>
                        
                    </div>
                </button>
                        </div>
            {/* Image Container */}
            <div className="width-[824px] heidht-[549px] gap-[4px] bg-[#C4DEFD]">
                <Image src={imagecontainer} alt="imagecontainer"></Image>
            </div>
                </div>
                
           
    );
}

export default Hero