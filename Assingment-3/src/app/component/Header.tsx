import Image from "next/image";
import logo from "@/app/assets/Logo.png"
const Header = () => {
    return(
        <div className="width-[1920px] height-[92px] left-[1px] flex justify-between py-4 px-[220px] bg-[#043873]">
        {/* logo */}
            <div className="width-[191px] height-[34px] flex justify-between">
              <Image src={logo} alt="logo"></Image>
            </div>
        {/* Frame 375 */}
            <div className="widht-[737.5px] height-[60px] gap-[60px] flex ">
            {/* Nav menu */}
                <ul className="width-[549px] height-[23px] gap-[32px] flex  items-center">
                    <li className="width-[78px] height-[23px] gap-[10px] text-lg font-medium leading-[23px] text-[#FFFFFF] ">Products</li>
                    <li className="width-[79px] height-[23px] gap-[10px] text-lg font-medium leading-[23px] text-[#FFFFFF]">Solutions</li>
                    <li className="width-[89px] height-[23px] gap-[10px] text-lg font-medium leading-[23px] text-[#FFFFFF]">Resources</li>
                    <li className="width-[58px] height-[23px] gap-[10px] text-lg font-medium leading-[23px] text-[#FFFFFF]">Pricing</li>
                </ul>
                {/* button */}
                <button className="width-[126px] height-[60px] gap-24px rounded-lg py-4 px-10 bg-[#FFE492] gap-[10px]">Login</button>
            </div>
        </div>
    );
}

export default Header