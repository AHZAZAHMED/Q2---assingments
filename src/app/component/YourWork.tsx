import Image from "next/image";
import group214 from "@/app/assets/Group 214.png"
const YourWork = () => {
    return(
        <div className="width-[1921px] height-[574px] top-[4080px] left-[1px] py-[140px] px-[220px] bg-[#043873] flex flex-col  ">
            {/* Heading */}
            <div className="width-[1481px] height-[294px] gap-[60px] flex flex-col text-[#FFFFFF]">
                {/* text block */}
                <div className="width-[1064px] height-[171px] gap-[24px] flex flex-col items-center justify-center">
                    <h1 className="width-[1064px] height-[87px] font-bold text-7xl leading-[87.14px] tracking-[-0.02em]">Your work, everywhere you are</h1>
                    <p className="width-[1064px] height-[60px] font-normal text-lg leading-[30px] tracking-[-0.02em] text-center">Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!</p>
                </div>
                {/* Button */}
                <div className="items-center justify-center flex ">
                <button className="width-[195px] height-[63px] rounded-lg px-10 py-5 gap-[10px] bg-[#4F9CF9]  relative flex flex-row">
                    <p className="width-[91px] height-[23px] font-medium text-lg leading-[23px] tracking-[-0.02em] ">Try Taskey</p>
                    <Image src={group214} alt="image" className=" absolute width-[14px] height-[14px] gap-1 right-[15px] bottom-[22px]"></Image>
                </button>
                </div>
            </div>
        </div>
    );
}

export default YourWork