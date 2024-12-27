import * as React from 'react'
import {CgProfile} from "react-icons/cg";
import {CiCalendar} from "react-icons/ci";

const Blogs : React.FC = () => {
    return (
        <div className={"container mx-auto"}>
            <div className={"flex justify-between items-center my-14"}>
                <div className={"space-y-4"}>
                    <div>
                        <img src={"/shopet/images/blogs/blog-1.png"}
                             alt={"نکات کلیدی درباره نگهداری سگ در آپارتمان های ایرانی"}/>
                    </div>
                    <div className={"flex items-center gap-x-5"}>
                        <div className={" flex items-center gap-x-1"}>
                            <CgProfile className={"text-primary"}/>
                            <p className={"text-[12px] text-black"}><span
                                className={"text-[#888888]"}>منتشر کننده</span> آرمان</p>
                        </div>
                        <div className={"flex items-center gap-x-1"}>
                            <CiCalendar className={"text-primary"}/>
                            <p className={"text-[12px] text-[#888888]"}>تاریخ <span
                                className={"text-black"}>۱۴۰۰/۰۲/۲۴</span></p>
                        </div>
                    </div>
                    <div className={"space-y-2 pl-20"}>
                        <h3 className={"text-lg"}>نکات کلیدی درباره نگهداری سگ در آپارتمان های ایرانی</h3>
                        <p className={"text-[#888888]"}>نگهداری از سگ تو همه مناطق دنیا داره رواج بیشتر و بیشتری پیدا
                            می‌کنه و خب همون‌طور که ... </p>
                    </div>
                </div>
                <div className={"space-y-4"}>
                    <div>
                        <img src={"/shopet/images/blogs/blog-2.png"}
                             alt={"13 تا از بهترین نژادهای سگ برای افراد مبتدی را بشناسید!"}/>
                    </div>
                    <div className={"flex items-center gap-x-5"}>
                        <div className={" flex items-center gap-x-1"}>
                            <CgProfile className={"text-primary"}/>
                            <p className={"text-[12px] text-black"}><span
                                className={"text-[#888888]"}>منتشر کننده</span> آرمان</p>
                        </div>
                        <div className={"flex items-center gap-x-1"}>
                            <CiCalendar className={"text-primary"}/>
                            <p className={"text-[12px] text-[#888888]"}>تاریخ <span
                                className={"text-black"}>۱۴۰۰/۰۲/۲۴</span></p>
                        </div>
                    </div>
                    <div className={"space-y-2 pl-20"}>
                        <h3 className={"text-lg"}>13 تا از بهترین نژادهای سگ برای افراد مبتدی را بشناسید!</h3>
                        <p className={"text-[#888888]"}>  سگ‌ها می‌تونن بهترین دوست ما، هم‌بازی بچه‌هامون یا نگهبان خونه‌مون باشن. ولی برای ... </p>
                    </div>
                </div>
                <div className={"space-y-4"}>
                    <div>
                        <img src={"/shopet/images/blogs/blog-3.png"}
                             alt={"3 روش ساده برای آموزش فرمان نخور به سگ، که همه باید بدانند."}/>
                    </div>
                    <div className={"flex items-center gap-x-5"}>
                        <div className={" flex items-center gap-x-1"}>
                            <CgProfile className={"text-primary"}/>
                            <p className={"text-[12px] text-black"}><span
                                className={"text-[#888888]"}>منتشر کننده</span> آرمان</p>
                        </div>
                        <div className={"flex items-center gap-x-1"}>
                            <CiCalendar className={"text-primary"}/>
                            <p className={"text-[12px] text-[#888888]"}>تاریخ <span
                                className={"text-black"}>۱۴۰۰/۰۲/۲۴</span></p>
                        </div>
                    </div>
                    <div className={"space-y-2 pl-20"}>
                        <h3 className={"text-lg"}>3 روش ساده برای آموزش فرمان نخور به سگ، که همه باید بدانند.</h3>
                        <p className={"text-[#888888]"}> هر سگی باید یاد بگیره که از روی زمین چیزی نخوره چون این کار می‌تونه کلی دردسر ایجاد کنه، از ...</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blogs;