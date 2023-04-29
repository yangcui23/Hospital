import { useAuthContext } from "./useAuthContext"
import { useNavigate } from "react-router-dom"



export const useLogOut = () => {
    const navigate = useNavigate()
    const {dispatch} = useAuthContext()

    const logOut = () => {
        localStorage.removeItem('user')
        navigate('/')
        

    dispatch({type :'LOGOUT' })
    }

    return {logOut}
}