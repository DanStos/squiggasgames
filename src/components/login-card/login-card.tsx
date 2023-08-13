import React, { useState } from "react";
import { Form, Button } from "reactstrap";
import InputField from "../utils/input-field";

const LoginForm = () => {
    const [inputValue, setInputValue] = useState({ email:"" , password: ""});
    const { email , password } = inputValue;

    const handleChange = (e:any) => {
        const { name, value } = e.target;
        setInputValue((prev) => ({
            ...prev,
            [name]: value,
        }));
        console.log(inputValue);
    };

    return (
        <div className="form">
            
            <Form>
                <InputField
                    type="text"
                    value={email}
                    placeholder="Insira seu e-mail"
                    label=""
                    name="email"
                    onChange={handleChange}
                    
                />
                <InputField
                    type="password"
                    value={password}
                    placeholder="Insira sua senha"
                    label=""
                    name="password"
                    onChange={handleChange}
                />
            </Form>
        </div>
    )
};

export default LoginForm;