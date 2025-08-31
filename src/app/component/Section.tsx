import Image from "next/image";
import PropTypes from 'prop-types';

const Section = ({width ,height , top , Color, textColor ,title , description ,buttonText, imageSrc,iconSrc reverse}) => {
    return(
        <section className="{`flex item-center justify-between gap-[98px] left-[1px] py-[] px-[] ${bgColor} ${textColor} ${reverse ? 'flex-row-reverse' : ''} `}">
            <div className="flex gap-[60] flex-col">
                <div className="gap-[24] ">
                    <h1 className="text-7xl leading-[87.14px] tracking-[-0.02em] font-bold">{title}</h1>
                    <p className="text-lg font-normal leading-[30px] tracking-[-0.02em]">{description}</p>
                </div> 
                {buttonText && (
                <button className="rounded-8 px-[40px] py-[20px] gap-[20] flex">
                    <p className="font-medium text-lg leading-[23px] tracking-[-0.02em] text-white">{buttonText}</p>
                    <div className="gap-1">{iconSrc}</div>
                </button>
                )}
            </div>
            {imageSrc &&(
            <div className="gap-1">
                <Image src={imageSrc} alt="image"></Image>
            </div>
            )}
        </section>
    );
}

export default Section