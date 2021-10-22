import React, { forwardRef } from 'react';

interface HomeFormProps {
    handleSubmit: any;
    handleInputChange?: any,
    userData: any
}

const HomeForm = forwardRef<HTMLInputElement, HomeFormProps>((props, ref) => {
    return (
        <form onSubmit={props.handleSubmit} className="flex flex-col">
            <label htmlFor="name" className="mb-4 font-semibold">Insira seu nome:</label>
            <div className="relative my-4">
                <input onChange={props.handleInputChange} ref={ref} value={props.userData.name} className="border-0 pl-1.5 border-b-2 bg-transparent outline-none w-full peer" required aria-required id="name" name="name" type="text" aria-label="name" aria-placeholder="name" />
                <span className={`absolute left-0 z-0 pl-1.5 pointer-events-none transform-gpu transition-transform peer-focus:-translate-y-6 peer-focus:-translate-x-1 peer-focus:scale-75 ${props.userData.name ? "-translate-y-6 -translate-x-1 scale-75" : ""}`}>Nome</span>
            </div>
            <button className="bg-white w-48 h-10 rounded-md rounded-tr-2xl text-black font-bold mx-auto transform-gpu transition-all hover:skew-x-6 hover:bg-yellow-400" type="submit">Prosseguir</button>
        </form>
    )
})

export default HomeForm;