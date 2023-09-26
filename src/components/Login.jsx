import { handleLogin } from "../helpingFunctions"
import '../css/Login.css';

const Login = ({setUser, setMessage, setColor, navigate, cookies}) => {
  return (
    <main className="login">
      <div className="login-form">
      <h2>Login into your account</h2>
      <form onSubmit={e => handleLogin(e, setUser, setMessage, setColor, navigate, cookies)}>
        <label htmlFor="email">Email address: </label>
        <input type="email" name="email" id="email" />
        <label htmlFor="password">Password: </label>
        <input type="password" name="password" id="password" />
        <input type="submit" value="Login" />
      </form>
      </div>
    </main>
  )
}

export default Login
