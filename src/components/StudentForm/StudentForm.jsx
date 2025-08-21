import { useState } from "react";

function StudentForm() {
    // variables for the State of the input fields
    const[firstName, setFirstName] = useState('');
    const[lastName, setLastName] = useState('');
    const[birthdate, setBirthdate] = useState('');
    const[address, setAddress] = useState('');
    const[homeroom, setHomeroom] = useState('');
    const[studentId, setStudentId] = useState('');
    
    // handleInput functions
    function handleFirstNameInput(e) {
        setFirstName(e.target.value);
    };

    function handleLastNameInput(e) {
        setLastName(e.target.value);
    };

    function handleBirthdateInput(e) {
        setBirthdate(e.target.value);
    };

    function handleAddressInput(e) {
        setAddress(e.target.value);
    }

    function handleHomeroomInput(e) {
        setHomeroom(e.target.value);
    }

    function handleStudentIdInput(e) {
        setStudentId(e.target.value);
    }


    return (
        <div>
            <div id="form">
                <h2>Enter student info here:</h2>
                <form>
                    {/* Birthdate, Address, Homeroom class number, Student ID */}
                    <div className="input_field">
                        <label htmlFor="first_name">First Name: </label>
                        {/* in JSX wird das for-Attribut zu htmlFor, da in JavaScript das Wort "for" schon für Schleifen reserviert ist */}
                        <input 
                            name="first_name"
                            id="first_name" 
                            type="text" 
                            onChange={handleFirstNameInput} 
                            value={firstName} 
                        />
                    </div>
                    <div className="input_field">
                        <label htmlFor="last_name">Last Name: </label>
                        <input 
                            name="last_name"
                            id="last_name" 
                            type="text" 
                            onChange={handleLastNameInput} 
                            value={lastName} 
                        />
                    </div>
                    <div className="input_field">
                        <label htmlFor="birthdate">Birthdate: </label>
                        <input 
                            name="birthdate" 
                            id="birthdate" 
                            type="date"
                            onChange={handleBirthdateInput}
                            value={birthdate}
                        />
                    </div>
                    <div className="input_field">
                        <label htmlFor="address">Address: </label>
                        <input 
                            name="address"
                            id="address"
                            type="text"
                            onChange={handleAddressInput}
                            value={address}
                        />
                    </div>
                    <div className="input_field">
                        <label htmlFor="homeroom">Homeroom class number: </label>
                        <input 
                            name="homeroom"
                            id="homeroom"
                            type="text"
                            onChange={handleHomeroomInput}
                            value={homeroom}
                        />                    
                    </div>
                    <div className="input_field">
                        <label htmlFor="student_id">Student ID: </label>
                        <input 
                            name="student_id"
                            id="student_id"
                            type="text"
                            onChange={handleStudentIdInput}
                            value={studentId}
                        />
                    </div>
                </form>
            </div>
            
            <div id="input_output">
                <h2>Current input:</h2>
                <ul >
                    {firstName && <li>{`First name: ${firstName}`}</li>} 
                    {/* rendert den Listeneintrag nur, sobald es kein leerer String ist */}
                    {lastName && <li>{`Last name: ${lastName}`}</li>}
                    {birthdate && <li>{`Birthdate: ${birthdate}`}</li>}
                    {address && <li>{`Address: ${address}`}</li>}
                    {homeroom && <li>{`Homeroom class number: ${homeroom}`}</li>}
                    {studentId && <li>{`Student ID: ${studentId}`}</li>}
                </ul>
            </div>
        </div>
    )
};

export default StudentForm;