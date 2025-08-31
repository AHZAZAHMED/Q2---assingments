import Image from "next/image";
import logo from "@/app/assets/Logo.png"
import termsandcondition from "@/app/assets/Tems and condition.png"
const Footer = () =>{
    return(
        <div className="width-[1920px] height-[461px]  top-[5195px] left-[1px] px-[220] py-[140px] gap-[200px] bg-[#043873]">

            {/* content */}
        <div className="widht-[1480px] height-[289px] gap-[100px]">

            {/* Info */}
            <div className="width-[1480px] height-[169px] gap-[100px] flex">

                {/* Logo-discription */}
              <div className="width-[295px] height-[169px] gap-[15px]">
                 {/* logo */}
                 <Image className="width-[191px] height-[34px]" src={logo} alt="logo"></Image>
                 <p className="width-[240px] height-[120px] font-normal text-lg leading-[30px] tracking-[-0.02em] text-[#F7F7EE]">whitepace was created for the new ways we live and work. We make a better workspace around the world</p>
              </div>

               {/* Sub-Info-1 */}
              <div className="width-[295px] height-[127px] gap-[15px]">
                <p className="width-[68px] height-[22px] font-bold text-lg leading-[21.78px] tracking-[-0.02] text-[#FFFFFF]">Product</p>

                <p className="width-[70px] height-[20px] font-normal text-base leading-[20px] tracking-[-0.02] text-[#FFE492]">Overview</p>

                <p className="width-[50px] height-[20px] font-normal text-base leading-[20px] tracking-[-0.02] text-[#FFFFFF]">Product</p>

                <p className="width-[177px] height-[20px] font-normal text-base leading-[20px] tracking-[-0.02] text-[#FFFFFF]">Product</p>
              </div>

              {/* Sub-Info-2 */}
              <div className="width-[295px] height-[130px] gap-[16px]">
                <p className="width-[91px] height-[22px] font-bold text-lg leading-[21.78px] tracking-[-0.02] text-[#FFFFFF]">Resources</p>

                <p className="width-[33px] height-[20px] font-normal text-base leading-[20px] tracking-[-0.02] text-[#FFFFFF]">Blog</p>

                <p className="width-[128px] height-[20px] font-normal text-base leading-[20px] tracking-[-0.02] text-[#FFFFFF]">Guides & tutorials</p>

                <p className="width-[130px] height-[20px] font-normal text-base leading-[20px] tracking-[-0.02] text-[#FFFFFF]">Help center</p>
              </div>

               {/* Sub-Info-1 */}
               <div className="width-[295px] height-[130px] gap-[16px]">
                <p className="width-[83px] height-[22px] font-bold text-lg leading-[21.78px] tracking-[-0.02] text-[#FFFFFF]">Company</p>

                <p className="width-[66px] height-[20px] font-normal text-base leading-[20px] tracking-[-0.02] text-[#FFFFFF]">About us</p>

                <p className="width-[62px] height-[20px] font-normal text-base leading-[20px] tracking-[-0.02] text-[#FFFFFF]">Careers</p>

                <p className="width-[99px] height-[20px] font-normal text-base leading-[20px] tracking-[-0.02] text-[#FFFFFF]">Media kit</p>
              </div>
            </div>

            {/* line */}
            <hr className="width-[1480px] h-1 my-6 border-solid border-[#2E4E73] rotate-0"></hr>
            {/* Btm */}
            <div className="width-[1480px] height-[20px] flex items-center justify-center ">
                <div className="width-[169px] height-[20px] gap-[60px] ">
                <Image src={termsandcondition} alt="Terms and condition image"></Image>
                </div>
            </div>
        </div>
        </div>

    );
}

export default Footer