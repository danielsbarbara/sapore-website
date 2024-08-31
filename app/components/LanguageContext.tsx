"use client"
import { createContext, useContext, useState } from "react"
interface LanguageContextProps {
    children: React.ReactNode
}
interface LanguageContextType {
        language: string,
        setLanguage: React.Dispatch<React.SetStateAction<string>>
}

const LanguageContext = createContext<LanguageContextType | null>(null)

export const LanguageProvider: React.FC<LanguageContextProps> = ({children}) => {
    const [language, setLanguage] = useState<string>('pt')
    return (
        <LanguageContext.Provider value={{language, setLanguage}}>
            {children}
        </LanguageContext.Provider>
    )
}

export const useLanguage = () => {
    const context = useContext(LanguageContext)!
    if(context === undefined) throw new Error('Context used in a wrong place')
    return context
}