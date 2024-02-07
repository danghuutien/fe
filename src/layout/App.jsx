import { useNavigate  } from 'react-router-dom';
import { useEffect } from "react"
export default function App({children}){
    const router = useNavigate();
    useEffect(() => {
        const loginToken = localStorage.getItem("login_token");
        if(loginToken) {
            router('/')
        } else {
            router('/login')
        } 
    }, [])
    return (
        
        <div className='flex justify-center items-center mt-10'>
            {children && children}
        </div>
    )
}