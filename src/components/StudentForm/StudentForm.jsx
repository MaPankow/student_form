import { useState } from "react";

function StudentForm() {

    const[firstName, setFirstName] = useState('');
    function handleFirstNameInput(e) {
        setFirstName(e.target.value);
    };

    return (
        <div>
            <div id="form">
                <h2>Enter student info here:</h2>
                <form>
                    <label for="first_name">First Name: </label>
                    <input name="first_name"id="first_name" type="text" onChange={handleFirstNameInput} value={firstName} />
                </form>
            </div>
            <div id="inputOutput">
                <h2>Current input:</h2>
                <ul >
                    {firstName && <li>{firstName}</li>} //rendert den Listeneintrag nur, sobald es kein leerer String ist
                </ul>
            </div>
        </div>
    )
};

export default StudentForm;