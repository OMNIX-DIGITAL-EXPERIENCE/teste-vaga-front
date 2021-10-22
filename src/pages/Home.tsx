import React from 'react'
import { useHistory } from 'react-router-dom'
import { useAppContext } from '../context/app'

import Header from '../components/Header'
import Footer from '../components/Footer'
import HomeForm from '../components/HomeForm'

function Home() {
    const { userData, setUserData } = useAppContext()
    const history = useHistory()
    const handleSubmit = ((event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (!userData.name) return
        history.push('/ofertas')
    })
    const handleInputChange = ((event: React.ChangeEvent<HTMLInputElement>) => {
        setUserData({
            ...userData,
            name: event.target.value
        })
      })
    return (
        <div className="h-full w-full bg-black text-white flex flex-col justify-between">
            <Header />
            <main className="flex-grow flex flex-col items-center px-4">
                <section className="w-full">
                    <h1 className="text-xl font-semibold my-12">Venha conhecer nossos planos de internet!</h1>
                    <HomeForm userData={userData} handleInputChange={handleInputChange} handleSubmit={handleSubmit} />
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default Home
