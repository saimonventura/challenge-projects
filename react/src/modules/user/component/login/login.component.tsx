import { useUser } from "modules/user/context/user.context";
import { ILoginUser } from "modules/user/type/user.type";
import { FormEvent, useCallback } from "react";
import { buttonStyle, formStyle, inputStyle, subTitleStyle } from "shared/style/className";


export function LoginComponent() {
    const { loginUser } = useUser();

    const submitHandler = useCallback((event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData.entries()) as ILoginUser;

        loginUser(data);
    }, [])

    return (
        <form onSubmit={submitHandler} className={formStyle}>
            <h2 className={subTitleStyle}>Create or Login</h2>
            <label>Name</label>
            <input placeholder="Name" className={inputStyle} defaultValue="Saimon" type="text" name="name" />
            <label>*User Name</label>
            <input placeholder="User Name" className={inputStyle} defaultValue="saimon" type="text" required name="username" />
            <label>*Password</label>
            <input placeholder="Password"
                className={inputStyle}
                defaultValue="Mudar#123"
                type="password"
                required
                name="password"
                pattern={'(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,}'}
            />
            <button className={buttonStyle} type="submit">Enter</button>
        </form>
    );
}
