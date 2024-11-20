import {IoIosArrowBack} from "react-icons/io";

const AnimalWorld = () => {
    return (
        <div className={"container mx-auto my-10"}>
            <div className={"bg-gradient-to-r from-sky-500 to-cyan-400 rounded-lg h-20 px-2"}>
                <div className={"flex justify-between"}>
                    <div className={"w-full flex justify-center items-center gap-x-3 py-4"}>
                        <p className={"text-3xl text-white"}>دنیای عجیب حیوانات خانگی</p>
                        <button className={"flex items-center gap-x-2 bg-white text-primary py-1 px-2 rounded-full text-2xl"}>محصولات
                            ویژه<IoIosArrowBack className={"text-white rounded-full bg-primary size-7"}/></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AnimalWorld;