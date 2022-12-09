import { FormEvent, useCallback } from "react";
import { useUser } from "context/user.context";
import { ILoginUser } from "types/user.type";

export function LoginComponent() {
    const { loginUser } = useUser();

    const submitHandler = useCallback((event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData.entries()) as ILoginUser;

        loginUser(data);
    }, [])

    return (
        <form onSubmit={submitHandler} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <label>Name</label>
            <input defaultValue="Saimon" type="text" name="name" />
            <label>*User Name</label>
            <input defaultValue="saimon" type="text" required name="username" />
            <label>*Password</label>
            <input
                defaultValue="Mudar#123"
                type="password"
                required
                name="password"
                pattern={'(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,}'}
            />
            <button type="submit">Enter</button>
        </form>
    );
}
