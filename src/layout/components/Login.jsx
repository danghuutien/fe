import { useState, useEffect, useCallback } from "react"
import TopLoader from "./TopLoader";
import axios from "axios";
import { useNavigate  } from 'react-router-dom';

export default function Login(){
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useNavigate();
    useEffect(() => {
        document.title = 'Login May Viet';
    }, []);
    const handleLogin = useCallback(
        async (event) => {
            event.preventDefault();
            setLoading(!loading)
            const response =  await axios.post('/api/login', {
                email,password,
                deviceName: 'web'
            })
            if(response.data.status == 'success'){
                localStorage.setItem("login_token", response.data.token);
                router('/');
            }else{
                alert(response.data.message)
                setLoading(false)
            }
        }, [password, email, loading])
    return (
        <section className="bg-gray-50">
            {loading ? <TopLoader /> : ''}
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900" aria-label="login">
                    Login    
                </a>
                <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                            Sign in to your account
                        </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={handleLogin}>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                                <input onChange={(event) => setEmail(event.target.value)} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-600 block w-full p-2.5" placeholder="name@company.com" required="" />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                                <input onChange={(event) => setPassword(event.target.value)} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-600 block w-full p-2.5" required="" />
                            </div>
                            <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign in</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}