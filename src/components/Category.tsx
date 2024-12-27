import { IoIosArrowBack } from "react-icons/io";

const Category = () => {
    return (
        <div className={"container mx-auto"}>
            <div className={"flex justify-between gap-x-5"}>
                <div
                    className={"flex flex-col pt-10 items-start justify-between w-full bg-[#FF9AB3] rounded-lg text-white space-y-3 py-4 px-8"}>
                    <div className={"space-y-6"}>
                        <div><h3 className={"text-xl"}>فروش انواع غذای خشک</h3></div>
                        <button className={"flex items-center gap-x-2 bg-[#E77291] py-1 px-2 rounded-full"}>خرید
                            کنید<IoIosArrowBack className={"bg-white rounded-full text-[#FF9AB3] size-6"} /></button>
                    </div>
                    <div className={"flex justify-start z-20"}><img src={"images/category/category4.png"}
                        alt={"فروش انواع غذای خشک"} /></div>
                </div>
                <div
                    className={"flex flex-col pt-10 items-start justify-between w-full bg-[#648958] rounded-lg text-white space-y-3 py-4 px-8"}>
                    <div className={"space-y-6"}>
                        <div><h3 className={"text-xl"}>غذای سگ نژاد جونیور</h3></div>
                        <button className={"flex items-center gap-x-2 bg-[#88BD88] py-1 px-2 rounded-full"}>خرید
                            کنید<IoIosArrowBack className={"bg-white rounded-full text-[#FF9AB3] size-6"} /></button>
                    </div>
                    <div className={"flex justify-start z-20"}><img src={"images/category/category3.png"}
                        alt={"فروش انواع غذای خشک"} /></div>
                </div>
                <div
                    className={"flex flex-col pt-10 items-start justify-between w-full bg-[#EC8A3C] rounded-lg text-white space-y-3 py-4 px-8"}>
                    <div className={"space-y-6"}>
                        <div><h3 className={"text-xl"}>انواع کنسرو برای سگ</h3></div>
                        <button className={"flex items-center gap-x-2 bg-[#CC6513] py-1 px-2 rounded-full"}>خرید
                            کنید<IoIosArrowBack className={"bg-white rounded-full text-[#FF9AB3] size-6"} /></button>
                    </div>
                    <div className={"flex justify-start z-20"}><img src={"images/category/category2.png"}
                        alt={"فروش انواع غذای خشک"} /></div>
                </div>
                <div
                    className={"flex flex-col pt-10 items-start justify-between w-full bg-[#AF56C6] rounded-lg text-white space-y-3 py-4 px-8"}>
                    <div className={"space-y-6"}>
                        <div><h3 className={"text-xl text-nowrap"}>قرص و پودر های مولتی ویتامین</h3></div>
                        <button className={"flex items-center gap-x-2 bg-[#D086E3] py-1 px-2 rounded-full"}>خرید
                            کنید<IoIosArrowBack className={"bg-white rounded-full text-[#FF9AB3] size-6"} /></button>
                    </div>
                    <div className={"flex justify-start z-20"}><img src={"images/category/category1.png"}
                        alt={"فروش انواع غذای خشک"} /></div>
                </div>
            </div>
        </div>
    )
}

export default Category