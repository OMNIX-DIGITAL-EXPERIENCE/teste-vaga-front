import React from 'react'

interface OfferCardProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    name: string;
    value: number
}

const OfferCard: React.FC<OfferCardProps> = ({ name, value, ...props }) => {
    return (
        <div className="w-32 h-48 flex flex-col items-center bg-white text-black justify-between rounded-xl">
            <div className="rounded-t-xl h-1/5 w-full border-2 text-center bg-yellow-400">
                <p className="pt-1">{name}</p>
            </div>
            <div className="flex-grow flex items-center justify-center w-full">
                <span>{value}</span>
            </div>
            <button {...props} className="rounded-b-xl h-1/5 pb-1 bg-red-600 text-white border-2 w-full">Selecionar</button>
        </div>
    )
}

export default OfferCard;