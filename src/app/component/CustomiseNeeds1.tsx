import Image from "next/image"
import group214 from "@/app/assets/Group 214.png"
import imagecontainer from "@/app/assets/Image-container.png"

const CustomiseNeeds1 = () =>{
    return(
        <div className="width-[1921px] height-[812.09px] top-[3268px] left-[1px] py-[140px] px-[220px] gap-[98px] flex flex-row-reverse bg-white">
            
            {/* Heading */}
            <div className="width-[697px] height-[411px] gap-[60px] flex flex-col text-black">

                {/* Text-Block */}
                <div className="width-[697px] height-[288px] gap-[24px] flex flex-col">
                    <h1 className="width-[697px] height-[174px] font-bold text-7xl leading-[87.14px] tracking-[-0.02em]">Customise it
                    to your needs</h1>
                    <p className="width-[697px] height-[90px] font-normal text-lg leading-[30px] tracking-[-0.02em]">Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.
                    </p>
                </div>
                {/* Button */}
                <div className="flex">
                <button className="width-[171px]  height-[63px] rounded-md bg-[#4F9CF9] py-[20px] px-[40px] gap-[10px] flex">
                    <p className="width-[67px] height-[23px] font-medium text-lg leading-[23px] tracking-[-0.02em] text-white">Let's Go</p>
                    <Image src={group214} alt="image" className="width-[14px] height-[14px] gap-1 "></Image>
                </button>
                </div>
            </div>
            {/* image */}
                <Image src={imagecontainer} alt="image"className="width-[686px] height-[479px] gap-1 flex"></Image>
            
        </div>
    )
}

export default CustomiseNeeds1