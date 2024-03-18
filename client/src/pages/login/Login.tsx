import LoginBlock from "./LoginBlock"
import manipal_logo from '../../assets/images/LOGO-1.png'

const Login = () => {
  return (
    <div className="bg-gradient-to-r from-blue-400 to-blue-300 h-screen flex items-center justify-center">
    <div className="w-[60%] h-5/6 bg-white  rounded-2xl flex bg-login-image bg-cover">
      <div className="w-1/2  h-full  rounded-tl-2xl rounded-bl-2xl ">    
      </div>
      <div className="w-1/2  h-full relative ">
        <img src={manipal_logo} alt="" className="w-48 absolute right-10 top-5" />
        <LoginBlock/></div>
    </div>
    </div>
  )
}

export default Login