import { useState, useEffect } from "react";
import "../styles/Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../context/store";

export function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setToken, setIsAuth } = useAuthStore();
  const { token } = useAuthStore();

  useEffect(() => {
    if (token) {
      setIsAuth(true);
      navigate("/dashboard");
    }
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    console.log("Username:", email);
    console.log("Password:", password);
    let data = {
      username: email,
      password: password
    }
    axios.post("https://dev.apinetbo.bekindnetwork.com/api/Authentication/Login", data)
    .then((response) => {
      setToken(response.data);
      setIsAuth(true);
      navigate("/dashboard");
    })
    .catch((error) => {
      console.error(error);
    });
  };

  return (
    <>
      <main className="loginMain">
        <div className="loginForm">
          <img src="src/assets/logoLogin.svg" alt="Logo" />
          <h1>¡Empieza a conectar tu comunidad ante buenas acciones!</h1>
          <form onSubmit={handleSubmit} className="form">
            <label htmlFor="username">Correo Electronico*</label>
            <input 
              type="email" 
              name="username" 
              id="username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="password">Contraseña*</label>
            <input 
              type="password" 
              name="password" 
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <a href="">Recuperar contraseña</a>
            <button type="submit" className="loginButton">Ingresar</button>
          </form>
        </div>
      </main>
    </>
  );
}
