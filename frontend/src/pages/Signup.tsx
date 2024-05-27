import Quote from "../components/Quote"
import AuthHeader from "../components/AuthHeader"
import { AuthLabelledInput } from "../components/AuthLabelledInput"
import { useState } from "react"

//trpc-extermely script types library.
export const Signup = () => {
    const [postInputs, setPostInputs] = useState(
        {
            name: "",
            username: "",
            password: ""
        }
    );
    return (
        <>
            <div className="grid-cols-2 grid">
                {JSON.stringify(postInputs)}
                <div className=" h-screen flex justify-center items-center flex-col">
                    <AuthHeader type="signup" />
                    <AuthLabelledInput label="Name" placeholder="hello..." onChange={
                        (e) => {
                            setPostInputs(c => ({
                                ...c,
                                name: e.target.value
                            }))
                        }
                    } />
                </div>
                <div className="invisible md:visible">
                    <Quote />
                </div>



            </div>
        </>


    )

}