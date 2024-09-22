import { useState } from "react"
import { projectAuth } from "../firebase/config"

export const useSingnUp = () => {
    const [loading, setLoading] = useState()
    const [error, setError] = useState()


    const signup = async (email, password, name,setUser) => {
        try {
            setError(null)
            setLoading(true)
            const req = await projectAuth.createUserWithEmailAndPassword(email, password)

            await req.user.updateProfile({ displayName: name })
            console.log(req.user);
            setUser(req.user);
            setLoading(false)
        } catch (err) {
            setLoading(false)
            console.log(err);
            setError(err.message)
        }
    }

    return { loading, error, signup }
}