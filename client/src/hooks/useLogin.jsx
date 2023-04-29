import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { useNavigate } from "react-router-dom";
export const useLogIn = () => {
    const navigate = useNavigate()
    const [error, setError] = useState(null)
    const {dispatch} = useAuthContext()

    const logIn = async (email, password) => {
        setError(null)

        const response = await fetch('http://localhost:8000/api/user/login', {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'} ,
            body: JSON.stringify({email,password}) 
        })

        const json = await response.json()

        if (!response.ok) {

            setError(json.error)
        }
        if (response.ok) {
            localStorage.setItem('user', JSON.stringify(json))
            
            navigate('/appointments')
            dispatch({type: 'LOGIN' , payload:json})

        }
    }
    return {logIn , error}
}
