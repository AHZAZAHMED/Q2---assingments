import Image from "next/image";
import group214 from "@/app/assets/Group 214.png"
import imagecontainer1 from "@/app/assets/Image-container-1.png"
import worktogetherimage from "@/app/assets/Work Together Image.png"
  const WorkManagement = () =>{
    return(
        <div className="width-[1920px] height-[1588px] top[921px] left[1px] px-[220px] py-[140px] space-y-[100px]">
            {/* Content */}
            <div className="width-[1480px] height-[574px] gap-[60px] flex">
                {/* headline */}
                <div className="width-[672px] height-[411px] gap-[60px]">
                    {/* textblock */}
                    <div className="widht-[672px] height-[288px] gap-[24px] text-[#212529]">
                        <h1 className="widht-[672px] height-[174px] font-bold text-7xl leading-[87.14px] tracking-[-0.02em] 
                         ">Project Management</h1>
                        <p className="widht-[672px] height-[90px] font-normal text-lg leading-[30px] tracking-[-0.02em]">Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.</p>
                    </div>
                    {/* Button */}
                    <button className="widht-[201px] height-[63px] rounded-md px-10 py-5 bg-[#4F9CF9] flex gap-[10px] item-center">
                        <p className="width-[97px] height-[23px] font-medium text-lg leading-[23px] traccking-[-0.02em] text-[#FFFFFF]">Get Started</p>
                        <div className="width-[14px] height-[14px] gap-1">
                            <Image  className="widht-[14px] height-[14px] border border-solid items-center" src={group214} alt="group214">
                            </Image>
                        </div>
                    </button>
                </div>
                <Image className="widht-[748px] height-[547px] bg-[#C4DEFD]"src={imagecontainer1} alt="image-container"></Image>
            </div>

            {/* content */}

            <div className="widht-[1480px] height-[661px] gap-[100px] flex">

                {/* Work-together-image */}
                <Image className="width-[710px] height-[661px] border-[2px] border-solid border-[#A7CEFC]" src={worktogetherimage} alt="work together image"></Image>
                
                {/* headline */}
                <div className="width-[670px] height-[294px] gap-[60px]">
                    {/* Textblock */}
                    <div className="width-[670px] height-[171px] gap-6 text-[#212529]">
                        <h1 className="width-[670px] heigth-[87px] font-bold text-7xl leading-[87.14px] tracking-[-0.02em]">Work together</h1>
                        <p className="width-[670px] height-[60px] font-normal text-lg leading-[30px] tracking-[-0.02]">With whitepace, share your notes with your colleagues and collaborate on them.
You can also publish a note to the internet and share the URL with others.
</p>
                    </div>

                    {/* Button */}
                    <button className="width-[186px] height-[63px] rounded-md px-10 py-5 gap-[10px] bg-[#4F9CF9] flex"  >
                        <p className="width-[82px] height-[23px] font-medium text-lg leading-[23px] tracking-[-0.02em] text-[#FFFFFF]">Try it now</p>
                        <div className="width-[14px] height-[14px] gap-1 " >
                            <Image className="width-[14px] height-[14px] border-solid border border-[#FFFFFF]"src={group214} alt="image"></Image>
                        </div>
                    </button>
                </div>

            </div>
        </div>
    );
}

export default WorkManagement;