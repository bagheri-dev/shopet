import {FiPhoneCall} from "react-icons/fi";

const Footer = () => {
    return(
        <footer className={"relative bg-[url('/public/images/footer.png')] bg-cover bg-center h-[525px] flex justify-center items-center"}>
            <div className={"container mx-auto"}>
                <div className={"flex items-center justify-between px-40"}>
                    <div>
                        <nav>
                            <p className={"font-bold mb-3"}>دسترسی سریع</p>
                            <ul className={"text-[#666666] space-y-4"}>
                                <li>درباره ما</li>
                                <li>تماس با ما</li>
                                <li>سوالات متداول</li>
                                <li>پیگیری سفارشات</li>
                            </ul>
                        </nav>
                    </div>
                    <div>
                        <nav>
                            <p className={"font-bold mb-3"}>لینک های مهم</p>
                            <ul className={"text-[#666666] space-y-4"}>
                                <li>حساب کاربری من</li>
                                <li>سبد خرید</li>
                                <li>قوانین و مقررات</li>
                                <li>سیاست حفظ حریم شخصی</li>
                            </ul>
                        </nav>
                    </div>
                    <div className={"w-[364px] h-[220px] flex flex-col justify-center space-y-4"}>
                        <div className={"flex items-center gap-x-3"}>
                            <img src={"/public/images/logo.png"} alt={"Logo"}/>
                            <p className={"text-primary font-bold"}>شاپت</p>
                        </div>
                        <p className={"text-[#666666]"}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                            استفاده از طراحان گرافیک
                            است، </p>
                        <div className={"flex items-center gap-x-3"}>
                            <FiPhoneCall className={"size-6"}/>
                            <p className={"font-bold"}>شماره تماس: <span className={"text-primary"}>۰۹۱۷۱۲۳۴۵۶۷</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className={"text-center absolute bottom-8 right-[575px]"}>
                    <p>تمامی حقوق این وبسایت برای شاپت محفوظ می باشد.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;