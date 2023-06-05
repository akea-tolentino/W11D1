import {useState, useEffect, useRef} from "react";

const Form = () => {

    const [user, setUser] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        phoneType: "",
        staff: "",
        bio: "",
        emailNotifications: "",
    });

    const [errors, setErrors] = useState([])

    const validate = () => {
        let errors = [];
        if (user.name.length === 0) {
            errors.push('Name can\'t be blank!');
        }   
        if (user.email.length === 0) {
            errors.push('Email can\'t be blank!');
        }   
        if (user.phoneNumber && user.phoneNumber.length !== 10) {
            errors.push('Invalid phone number!');
        }
        if (user.phoneNumber && !user.phoneType) {
            errors.push('Phone type must be provided!');
        }
        if (user.bio.split('').length > 280) {
            errors.push('Bio cannot exceed 280 characters!');
        }
        return errors
    }

    const handleChange = (field) => {
        return (e) => {
            const newObj = Object.assign({}, user, {[field] : e.target.value});

            setUser(newObj);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let errors = validate();

        if (errors.length > 0) {
            setErrors(errors);
        }
    }

    const showErrors = () => {
        if (!errors.length) {
            return null
        } else {
            return (
                <ul>
                    {errors.map(err => <li>{err}</li>)}
                </ul>
            )
        }
    }

    return (
        <>
            <h1>Sign Up!</h1>
            {showErrors()}
            <form onSubmit={handleSubmit}>
                <label>Name:
                    <input type="text" value={user.name} onChange={handleChange("name")}/>
                </label><br/>
                <label>Email:
                    <input type="text" value={user.email} onChange={handleChange("email")}/>
                </label><br/>
                <label>Phone Number:
                    <input type="text" value={user.phoneNumber} onChange={handleChange("phoneNumber")}/>
                </label><br/>
                <label for="phone-type">Phone Type:
                    <select name="phone-type">
                        <option value="home">Home</option>
                        <option value="work">Work</option>
                        <option value="mobile">Mobile</option>
                    </select>
                </label><br/>
                <input name="staff" type="radio" id="instructor" value={user.staff} onChange={handleChange("staff")}/>
                <label for="instructor">Instructor</label><br/>
                <input name="staff" type="radio" id="student" value={user.staff} onChange={handleChange("staff")}/>
                <label for="student">Student</label><br/>
                <label>Bio:
                    <input type="textarea" value={user.bio} onChange={handleChange("bio")}/>
                </label><br/>
                <label>Sign up for email notifications:
                    <input type="checkbox" value={user.emailNotifications} onChange={handleChange("emailNotifications")}/>
                </label><br/>
                <button>Submit</button>
            </form>
        </>
    )
}

export default Form;