import AuthForm from "@/components/AuthForm"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      navigate("/");
    }
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
        <AuthForm type="login" />
    </div>
  )
}

export default Login