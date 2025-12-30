import {create} from "zustand";

interface AuthState {
    token: string;
    setToken: (token: string) => void;
    isAuth: boolean;
    setIsAuth: (isAuth: boolean) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
    token: "",  
    setToken: (token: string) => set({token}), 
    isAuth: false,
    setIsAuth: (isAuth: boolean) => set({isAuth}),       
}))