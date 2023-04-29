import {useState} from 'react'
import { useAuthContext } from './useAuthContext'
import { useNavigate } from 'react-router-dom'

export const useSignUp = () => {
    const [error, setError] = useState(null)
    const {dispatch} = useAuthContext()
    const navigate = useNavigate()
    
    const signUp = async (firstName,lastName,social,email, password) => {
        setError(null)

        const response = await fetch('http://localhost:8000/api/user/signUp', {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'} ,
            body: JSON.stringify({firstName,lastName,social,email,password}) 
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
    return {signUp,error}
}