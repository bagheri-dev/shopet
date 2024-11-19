import {IoIosArrowBack} from "react-icons/io";

const AnimalWorld = () => {
    return (
        <div className={"container mx-auto my-10"}>
            <div className={"bg-gradient-to-r from-sky-500 to-cyan-400 rounded-lg py-8 px-2"}>
                <div className={"flex justify-between"}>
                    <div className={"w-full flex items-center gap-x-3"}>
                        <p className={"text-3xl text-white mb-4"}>دنیای عجیب حیوانات خانگی</p>
                        <button className={"flex items-center gap-x-2 bg-white text-primary py-1 px-2 rounded-full text-2xl"}>محصولات
                            ویژه<IoIosArrowBack className={"text-white rounded-full bg-primary size-7"}/></button>
                    </div>
                    <div className={"bg-[url('/public/images/dog.png')] bg-cover bg-center w-full"}></div>
                </div>
            </div>
        </div>
    )
}

export default AnimalWorld;