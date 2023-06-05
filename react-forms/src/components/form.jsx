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

    return (
        <>
            <h1>Sign Up!</h1>
            <form>
                <label>Name:
                    <input type="text" value={user.name}/>
                </label><br/>
                <label>Email:
                    <input type="text" value={user.email}/>
                </label><br/>
                <label>Phone Number:
                    <input type="text" value={user.phoneNumber}/>
                </label><br/>
                <label for="phone-type">Phone Type:
                    <select name="phone-type">
                        <option value="home">Home</option>
                        <option value="work">Work</option>
                        <option value="mobile">Mobile</option>
                    </select>
                </label><br/>
                <input type="radio" id="instructor" name="fav_language" value={user.staff}/>
                <label for="instructor">Instructor</label><br/>
                <input type="radio" id="student" name="fav_language" value={user.staff}/>
                <label for="student">Student</label><br/>
                <label>Bio:
                    <input type="textarea" value={user.bio}/>
                </label><br/>
                <label>Sign up for email notifications:
                    <input type="checkbox" value={user.emailNotifications} />
                </label><br/>
                <button>Submit</button>
            </form>
        </>
    )
}

export default Form;