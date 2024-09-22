import { useState } from "react"
import { projectAuth } from "../firebase/config"

export const useLogin = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState()


    const login = async (email, password,setUser) => {
        try {
            setLoading(true)
            const req = await projectAuth.signInWithEmailAndPassword(email, password)
            setUser(req.user)
            console.log(email, password);
            setLoading(false)
        } catch (err) {
            setLoading(false)
            if (err.code == "auth/internal-error") {
                setError("This user did not register!")
            } else {
                setError(err.message)
            }
        }
    }

    return { loading, error, login }
}