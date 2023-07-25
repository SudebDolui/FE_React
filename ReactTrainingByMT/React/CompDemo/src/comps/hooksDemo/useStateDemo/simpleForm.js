import { useState } from "react";

export default function SimpleForm() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [eemail, setEemail] = useState('');
    const [epassword, setEpassword] = useState('');

    const [eColor, setEColor] = useState('');
    const [pColor, setPColor] = useState('');

    function validate() {
        // console.log("Email" + email);
        if(email.includes('@mouritech.com')) {
            setEemail('');
            setEColor('green');
            setEemail("Email is Valid.");
        } else {
            setEemail("Email is not in correct format.");
            setEColor('red');
        }

        if(password?.length > 5) {
            setPassword('');
            setPColor('green');
            setEpassword("Password is Valid.");
        } else {
            setEpassword("Password should have minimum of 5 Characters.");
            setPColor('red');
        }
    };

    return (
        <>
            <div className="container">
                <h1>
                    Registration Form
                </h1>
                {/* <form> */}
                    <label>
                        EMAIL:
                    </label>
                    <input 
                    type = "text" 
                    className = "form-control"
                    style = {{borderColor: eColor }}
                    value = {email}
                    onChange = {(e) => setEmail(e.target.value)}
                    />
                    {eemail}
                    <br/>
                    
                    <label>
                        Password:
                    </label>
                    <input 
                    type = "password" 
                    className = "form-control"
                    style = {{borderColor: pColor}}
                    value = {password}
                    onChange = {(e) => setPassword(e.target.value)}
                    />
                    {epassword}
                    <br/>

                    <button 
                    className="btn btn-primary" 
                    type="submit"
                    onClick={validate}
                    >
                        Submit
                    </button>
                {/* </form> */}
            </div>
        </>
    );

};