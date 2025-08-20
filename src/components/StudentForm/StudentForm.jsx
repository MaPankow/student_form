import { useState } from "react";

function StudentForm() {

    const[userInput, setUserInput] = useState('');
    function handleUserInput(e) {
        setUserInput(e.target.value);
    };

    return (
        <div>
            <h2>Enter student info here:</h2>
            <form>
                <label for="first_name">First Name: </label>
                <input id="first_name" type="text" onChange={handleUserInput} value={userInput} />
            </form>
        </div>
    )
};

export default StudentForm;