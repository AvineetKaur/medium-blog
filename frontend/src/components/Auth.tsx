import React, { ChangeEvent, useState } from 'react'
import { Link } from 'react-router-dom'

const Auth = ({ type }: { type: "signup" | "signin" }) => {
    const [name, setName] = useState
    return (
        <div className=" h-screen flex justify-center items-center flex-col">
            <div className="text-3xl font-extrabold">
                Create an Account
            </div>
            <div className='text-slate-400'>
                Already have an account?

                <Link className='pl-2 underline' to={"/signin"}>Login</Link>

            </div>

        </div>
    )
}
interface LabelledInputType {
    label: string;
    placeholder: string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;

}

function LabelledInput({ label, placeholder, onChange }: LabelledInputType) {
    return (<div>
        <label className="block text-gray-700 text-sm font-bold mb-2">
            {label}
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder={placeholder} onChange={onChange}></input>

    </div>)
}

export default Auth
