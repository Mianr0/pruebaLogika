import { Navigate } from "react-router-dom";
import { useAuthStore } from "../context/store";

interface ProtectedRouteProps {
    children: React.ReactNode;
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
    const { isAuth } = useAuthStore();

    // Si no está autenticado, redirige al login
    if (!isAuth) {
        return <Navigate to="/" replace />;
    }

    // Si está autenticado, muestra el componente hijo (Dashboard)
    return <>{children}</>;
}
