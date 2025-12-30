import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface AuthState {
    token: string;
    setToken: (token: string) => void;
    isAuth: boolean;
    setIsAuth: (isAuth: boolean) => void;
    logout: () => void;
}

export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            token: "",  
            setToken: (token: string) => set({ token }), 
            isAuth: false,
            setIsAuth: (isAuth: boolean) => set({ isAuth }),
            // Función para cerrar sesión y limpiar el estado
            logout: () => set({ token: "", isAuth: false }),
        }),
        {
            name: "auth-storage", // nombre de la clave en localStorage
            storage: createJSONStorage(() => localStorage), // usa localStorage
        }
    )
)