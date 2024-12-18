import { Texts } from "./Texts"

export const Footer: React.FC = () => {
    return (
        <div className="w-full bg-layoutColor">
            <div className="h-[25rem] md:h-[15rem] w-full py-4 text-white flex flex-col 
        items-center gap-8 md:flex-row md:justify-around">
                <div>
                    <Texts text="footer1" styles="text-xl font-bold py-3" />
                    <div className="px-5">
                        <Texts text="footerSchedule" styles="text-sm" />
                        <Texts text="footerWeek" styles="text-sm" />
                        <Texts text="footerLunch" styles="text-sm" />
                        <p className="text-sm">12:00 - 15:30</p>
                        <Texts text="footerDinner" styles="text-sm" />
                        <p className="text-sm">19:00 - 23:00</p>
                        <Texts text="footerClosed" styles="text-sm" />
                    </div>
                </div>
                <div className="flex flex-col justify-center">
                    <Texts text="footerContact" />
                    <p>Tel: +351 213 140 434</p>
                </div>
                <div className="flex flex-col justify-center">
                    <Texts text="footerVisit" />
                    <p>Av. Sidónio Pais, nº2 - B 1050-214 - Lisboa</p>
                </div>
            </div>
            <div className="w-full flex justify-center">
                <Texts text="footer2" styles="py-3 font-bold text-sm text-white" />
            </div>
            <div className="flex justify-between text-white p-5 text-[0.7rem]">
                <p>This is for testing only, not for comercial use</p>
                <div>
                    <i className="font-thin block">Design by @Bianca</i>
                    <i className="font-thin">Developed by @Daniel</i>
                </div>
            </div>
        </div>
    )
}