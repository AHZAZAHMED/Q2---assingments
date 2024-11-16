import Image from "next/image";
import apple from "@/app/assets/Apple.png"
import microsoft from "@/app/assets/Microsoft.png"
import slack from "@/app/assets/Slack.png"
import google from "@/app/assets/Google.png"
const OurSponsors = () => {
    return(
        <div className=" flex flex-col width-[1922px] height-[538px] top-[4654px] px-[220px] py-[140px] gap-[100px]">
            <h1 className="width-[1482px] height-[87px] font-bold text-7xl leading-[87.14px] tracking-[-0.02] text-center text-[#212529]">Our sponsors</h1>

            {/* Sponsors */}
            <div className="width-[1482px] height-[71px] flex justify-between gap-[120.18]">
                {/* Apple */}
                <div className="width-[55.47px] height-[68px] gap-1">
                    <Image src={apple} alt="apple logo"></Image>
                </div>

                {/* Microsoft */}
                <div className="width-[287px] height-[62px] gap-1">
                    <Image src={microsoft} alt="microsoft logo"></Image>
                </div>

                {/* slack */}
                <div className="width-[280px] height-[71px] gap-1">
                    <Image src={slack} alt="slack logo"></Image>
                </div>

                {/* Google */}
                <div className="width-[211px] height-[69.81px] gap-1">
                    <Image src={google} alt="google logo"></Image>
                </div>
            </div>
        </div>
    );
}

export default OurSponsors;