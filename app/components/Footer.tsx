import { Texts } from "./Texts"

export const Footer: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center
        bg-orange-400">
            <Texts text="footer1"/>
            <Texts text="footer2"/>
        </div>
    )
}