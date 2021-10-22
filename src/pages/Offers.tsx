import React from 'react'
import { useHistory } from 'react-router-dom'
import { useAppContext } from '../context/app'

import Header from '../components/Header'
import Footer from '../components/Footer'
import FloatingButton from '../components/FloatingButton'
import OfferCard from '../components/OfferCard'

function Offers() {
    const { userData } = useAppContext()
    return (
        <div className="h-full w-full bg-black text-white flex flex-col justify-between">
            <Header phone={userData.phoneNumber} />
            <main className="flex-grow flex flex-col items-center px-4">
                <FloatingButton />
                <h1 className="mt-4">Olá {userData.name} <br className="md:hidden" /> Aqui estão algumas ofertas que preparamos para você!</h1>
                <section className="flex flex-wrap gap-4 mt-8">
                    {userData.offers.map(offer => (
                        <OfferCard key={`Oferta ${offer.id}`} name={offer.name} value={offer.value} />
                    ))}
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default Offers
