import {IoIosArrowBack} from "react-icons/io";

const AnimalFood = () => {
    return(
        <div className={"container mx-auto py-16"}>
            <div className={"flex items-center gap-x-12"}>
                <div className={"w-full flex items-center justify-between"}>
                    <div className={"flex items-center gap-x-4"}>
                        <img src={"images/fish.png"} alt={"fish"}/>
                        <p className={"font-bold text-xl"}>غذا ماهی</p>
                    </div>
                    <div>
                        <IoIosArrowBack className={"text-white rounded-full bg-[#5124C4] size-7"}/>
                    </div>
                </div>
                <div className={"w-full flex items-center justify-between"}>
                    <div className={"flex items-center gap-x-4"}>
                        <img src={"images/cat.png"} alt={"cat"}/>
                        <p className={"font-bold text-xl"}>غذا و لوازم گربه</p>
                    </div>
                    <div>
                        <IoIosArrowBack className={"text-white rounded-full bg-[#519BC2] size-7"}/>
                    </div>
                </div>
                <div className={"w-full flex items-center justify-between"}>
                    <div className={"flex items-center gap-x-4"}>
                        <img src={"images/dogs.png"} alt={"dog"}/>
                        <p className={"font-bold text-xl"}>غذا و لوازم سگ</p>
                    </div>
                    <div>
                        <IoIosArrowBack className={"text-white rounded-full bg-primary size-7"}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AnimalFood;