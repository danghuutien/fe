import { useCallback } from "react"
import App from "../App"
import { useNavigate  } from 'react-router-dom';
const LoginSuccess = () => {
    const navigate = useNavigate()
    const handleLogout = useCallback(
        () => {
            localStorage.removeItem("login_token");
            navigate('/login')
          }
    )
    return (
        <App>
            <h1 className="text-center"> đăng nhập thành công</h1>
            <button onClick={handleLogout} type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 ml-10">Đăng xuất</button>
        </App>
    )
}
export default LoginSuccess