import { ChangeEvent } from 'react'


interface LabelledInputType {
    label: string,
    placeholder: string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}
export const AuthLabelledInput = ({ label, placeholder, onChange }: LabelledInputType) => {
    return (
        <div>
            <label className="text-gray-700 text-sm font-bold mb-2">
                {label}
            </label>
            <input onChange={onChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="first_name" type="text" placeholder={placeholder} />
        </div>

    )
}