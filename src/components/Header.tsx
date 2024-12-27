import {CiHeart, CiSearch, CiUser} from "react-icons/ci";
import {IoBagOutline} from "react-icons/io5";
import {FiPhoneCall} from "react-icons/fi";

const Header = () => {
    return(
        <header className={"py-4"}>
            <div className={"container mx-auto"}>
                <div className={"flex items-center justify-between py-4"}>
                {/*Logo*/}
                    <div className={"flex items-center gap-x-3"}>
                        <img src={"/shopet/images/logo.png"} alt={"Logo"}/>
                        <p className={"text-primary"}>شاپت</p>
                    </div>
                {/*Search box*/}
                    <div className={"w-5/12 bg-[#F2F2F2] rounded-full focus-within:outline flex items-center gap-x-3 px-2"}>
                        <input className={"w-full px-2 py-2 outline-none bg-inherit"} placeholder={"محصول مورد نظر رو جستجو کنید ..."} type="search" name="search" id="search" />
                        <CiSearch className={"size-8 text-white bg-[#5124C4] rounded-full"}/>
                    </div>
                    <div className={"flex items-center gap-x-10"}>
                        <div className={"flex items-center gap-x-1"}>
                            <div>
                                <img src={"/shopet/images/icons/Tick-Square.svg"} alt={"Tick-Square"}/>
                            </div>
                            <div>
                                <p>ضمانت اصالت کالا</p>
                                <span className={"text-black/30"}>٪۱۰۰ تضمین اصالت</span>
                            </div>
                        </div>
                        <div className={"flex items-center gap-x-1"}>
                            <div>
                                <img src={"/shopet/images/icons/iconamoon_delivery-free-thin.svg"}/>
                            </div>
                            <div>
                                <p>ارسال رایگان</p>
                                <span className={"text-black/30"}>تمامی خرید ها</span>
                            </div>
                        </div>
                    </div>
                {/*  icons  */}
                    <div className={"flex items-center gap-x-3"}>
                        <div><IoBagOutline className={"size-8"}/></div>
                        <div><CiHeart className={"size-8"}/></div>
                        <div><CiUser className={"size-8"}/></div>
                    </div>
                </div>
            {/*  Menu  */}
                <div className={"flex items-center justify-between py-2 mt-8"}>
                    <div>
                        <nav>
                            <ul className={"flex items-center gap-x-7 font-bold"}>
                                <li className={"text-primary"}>خانه</li>
                                <li>فروشگاه</li>
                                <li>وبلاگ</li>
                                <li>تماس با ما</li>
                                <li>درباره ما</li>
                            </ul>
                        </nav>
                    </div>
                    <div className={"flex items-center gap-x-3"}>
                        <FiPhoneCall className={"size-6"}/>
                        <p className={"font-bold"}>شماره تماس: <span className={"text-primary"}>۰۹۱۷۱۲۳۴۵۶۷</span></p>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;