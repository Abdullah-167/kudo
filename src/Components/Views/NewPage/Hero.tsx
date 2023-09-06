import Image from "next/image";
import Link from "next/link";


const Hero = () => {

    return (
        <header className="home-bgMain pt-10">
            <div className=" max-w-[1600px] mx-auto px-5">
                <div className="header flex justify-between sm:gap-20 items-center">
                    <div className="pb-10 sm:pb-12 sm:pl-10 md:pl-20">
                        <div>
                            <h1 className="text-[40px] md:text-[60px] text-white font-bold  xl:max-w-[651px]  leading-[50px] sm:leading-[65px] pb-7">
                                REMOTE SIMULTANEOUS INTERPRETING
                            </h1>
                            <h2 className="font-poppins text-[28px] font-semibold mb-4 text-white">
                                Remote interpreting                             </h2>
                            <p className="font-poppins text-base sm:text-[20px] font-medium text-white  xl:max-w-[750px] mb-10 sm:mb-14 leading-8">
                                Why use cumbersome hardware when technology allows us to obtain superior quality with just a few clicks? Try Rafiky software for remote interpreting . You will simply need a laptop and a smartphone (or tablet).   </p>
                        </div>
                        <div className="flex item-center flex-wrap md:flex-nowrap gap-x-5  gap-y-3">
                            <span className="border border-white  bg-white px-5 rounded-full py-2 cursor-pointer flex justify-center items-center min-w-[230px] max-w-[230px]">
                                Get A Quote
                            </span>
                            <span className=" border-2 border-white px-5 rounded-full py-2 text-white cursor-pointer flex justify-center items-center min-w-[230px] max-w-[230px]">
                                Watch Introduction
                            </span>
                        </div>
                    </div>
                    <div className="mx-auto md:w-[500px] mt-10 sm:mt-20  md:h-[600px] overflow-hidden relative">
                        <Image
                            className="image"
                            src={"/laugh.webp"}
                            alt={'Image'}
                            width={450}
                            height={450}
                            blurDataURL={"/laugh.webp"}
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Hero;
