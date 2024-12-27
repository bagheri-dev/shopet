import {IoIosArrowBack} from "react-icons/io";

const HeroSection = () => {
    return(
        <div className={"container mx-auto"}>
            <div className={"flex justify-around items-center bg-[#E0F5FF] rounded-3xl py-8 mt-6"}>
                <div className={"w-1/4 space-y-6"}>
                    <h1 className={"text-4xl font-Peyda leading-10"}>بهترین و جدیدترین
                        <p className={"font-bold"}>لوازم سگ خانگی</p></h1>
                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است.</p>
                    <button className={"flex items-center gap-x-3 bg-[#5124C4] py-1 px-2 rounded-full text-white text-xl"}>خرید کنید<IoIosArrowBack className={"bg-white rounded-full text-[#5124C4] size-6"} /></button>
                </div>
                <div>
                    <img src={"images/hero-dog.png"} alt={"image dog"}/>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;