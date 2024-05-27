
import { Link } from 'react-router-dom'


const AuthHeader = ({ type }: { type: "signup" | "signin" }) => {
    return (<>
        <div className="text-3xl font-extrabold">
            {type === "signin" ? "Sign In to account " : "Create an Account"}

        </div>
        <div className='text-slate-400'>
            {type === "signin" ? "Don't have an account?" : "Already have an account?"}

            <Link className='pl-2 underline' to={type === "signin" ? "/signup" : "/signin"}>{type === "signin" ? "Sign up" : "Sign in"}</Link>

        </div>
    </>



    )
}

export default AuthHeader
