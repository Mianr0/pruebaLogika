import { useAuthStore } from "../context/store";

export function Hero() {
    const { token, isAuth } = useAuthStore();
    console.log(isAuth);
    let a = isAuth;
    return (
        <>
            <h1>Hero</h1>
            <p>{token}</p>
            <br />
            <br />
            <p>{a}</p>
        </>
    );
}