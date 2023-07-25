import useForm from "./useForm"

const UserForm = () => {
    const {state, changeValue, validationInput, clearErrors} = useForm();

    const validateName = () => {
        clearErrors();
        validationInput(v => v.length < 5 ? "User name must be atleast 5 characters": null);
        validationInput(v => v.toLowerCase() === 'test' ? "User name cannot be test": null);
    };

    return (
        <div className="container">
            <h1>User Registration</h1>
            <ul>
                {state.errors.map((err, i) => {
                    return <li key={i}>
                        <span style = {{color: 'red'}}>
                        {err}
                        </span>
                        </li>
                })}
            </ul>

            <input 
            className = "form-control"
            type = 'text'
            onChange = {changeValue}
            />

            <button
            onClick={validateName}
            >
                Submit
            </button>

        <h1>
            {state?.value}
        </h1>

        </div>
    )
};

export default UserForm;