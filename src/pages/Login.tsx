import { useState, useEffect } from "react";
import "../styles/Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../context/store";

export function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { setToken, setIsAuth } = useAuthStore();
  const { token } = useAuthStore();
  const [error, setError] = useState(null);

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
      password: password,
    };
    setLoading(true);
    axios
      .post(
        "https://dev.apinetbo.bekindnetwork.com/api/Authentication/Login",
        data
      )
      .then((response) => {
        setToken(response.data);
        navigate("/dashboard");
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
        setError(true);
        navigate("/");
      });
  };

  return (
    <>
      <main className="loginMain">
        <div className="loginForm">
          <img src="src/assets/logoLogin.svg" alt="Logo" />
          <h2>¡Empieza a conectar tu comunidad ante buenas acciones!</h2>
          <form onSubmit={handleSubmit} className="form">
            <label htmlFor="username">Correo Electronico*</label>
            <div className="input-container">
              <img
                src="src/assets/email.svg"
                alt="email icon"
                className="input-icon"
              />
              <input
                type="email"
                name="username"
                id="username"
                data-cy="username"
                placeholder="Correo Electronico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <label htmlFor="password">Contraseña*</label>
            <div className="input-container">
              <img
                src="src/assets/password.svg"
                alt="password icon"
                className="input-icon"
              />
              <input
                type="password"
                name="password"
                id="password"
                data-cy="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <a href="">Recuperar contraseña</a>
            <button type="submit" className="loginButton" data-cy="login-btn">
              Ingresar
            </button>
            {loading && <div>Loading...</div>}
            {error && <div data-cy="authError">Error: {error}</div>}
          </form>
        </div>
      </main>
    </>
  );
}
