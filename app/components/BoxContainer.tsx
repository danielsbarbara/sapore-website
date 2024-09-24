interface BoxContainerProps {
    children: React.ReactNode
}

export const BoxContainer: React.FC<BoxContainerProps> = ({children}) => {
    return (
        <div className="flex flex-wrap justify-center gap-8">
            {children}
        </div>
    )
}