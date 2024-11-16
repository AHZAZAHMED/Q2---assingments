import Image from "next/image"
import group214 from "@/app/assets/Group 214.png"
import imagecontainer from "@/app/assets/Image-container.png"

const CustomiseNeeds = () =>{
    return(
        <div className="width-[1921px] height-[759px] top-[2509px] left-[1px] py-[140px] px-[220px] gap-[98px] flex bg-[#043873]">
            
            {/* Heading */}
            <div className="width-[697px] height-[294px] gap-[60px] flex flex-col text-white">

                {/* Text-Block */}
                <div className="width-[697px] height-[171px] gap-[24px] flex flex-col">
                    <h1 className="width-[697px] height-[87px] font-bold text-7xl leading-[87.14px] tracking-[-0.02em]">Use as Extension</h1>
                    <p className="width-[697px] height-[60px] font-normal text-lg leading-[30px] tracking-[-0.02em]">Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.
                    </p>
                </div>
                {/* Button */}
                <div className="flex">
                <button className="width-[171px]  height-[63px] rounded-md bg-[#4F9CF9] py-[20px] px-[40px] gap-[10px] flex">
                    <p className="width-[67px] height-[23px] font-medium text-lg leading-[23px] tracking-[-0.02em]">Let's Go</p>
                    <Image src={group214} alt="image" className="width-[14px] height-[14px] gap-1 "></Image>
                </button>
                </div>
            </div>
            {/* image */}
                <Image src={imagecontainer} alt="image"className="width-[686px] height-[479px] gap-1 flex"></Image>
            
        </div>
    )
}

export default CustomiseNeeds