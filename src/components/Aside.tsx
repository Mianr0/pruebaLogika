import { useAuthStore } from "../context/store";
import { useNavigate } from "react-router-dom";
import "./Aside.css";

export function Aside() {
  const { logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // Limpia el estado de autenticación
    navigate("/"); // Redirige al login
  };

  return (
    <div className="aside">
      <div className="aside-content">
        <img src="src/assets/bgAside.svg" alt="bgAside" className="bgAside" />
        <ul>
          <li>
            <a href="">
              <img src="src/assets/home.svg" alt="" />
              Home
            </a>
          </li>
          <li>
            <a href="">
              <img src="src/assets/impactoSocial.svg" alt="" />
              Impacto Social
            </a>
          </li>
          <li>
            <a href="">
              <img src="src/assets/comunidad.svg" alt="" />
              Comunidad
            </a>
          </li>
          <li>
            <a href="/">
              <img src="src/assets/sponsors.svg" alt="" />
              Sponsors
            </a>
          </li>
          <li>
            <a href="/">
              <img src="src/assets/marketplace.svg" alt="" />
              Markeplace
            </a>
          </li>
          <li>
            <a href="/">
              <img src="src/assets/bakanes.svg" alt="" />
              Bakanes
            </a>
          </li>
          <li>
            <a href="/">
              <img src="src/assets/contenidos.svg" alt="" />
              Contenido
            </a>
          </li>
          <li>
            <a href="/dashboard">
              <img src="src/assets/categorias.svg" alt="" />
              Categorias de acciones
            </a>
          </li>
        </ul>
      </div>
      <button onClick={handleLogout} className="btnLogout">
        <img src="src/assets/exit.svg" alt="exit" />
        Cerrar sesión
      </button>
    </div>
  );
}
