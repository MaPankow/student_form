import { useState, useRef } from "react";
import StudentNotes from "../StudentNotes/StudentNotes";

function StudentForm() {

    const notesRef = useRef(null);
    // variables for the State of the input fields

    const [textInput, setTextInput] = useState({
        firstName: '',
        lastName: '',
        birthdate: '',
        address: '',
        homeroom: '',
        studentId: ''
    });
    const [lunchOptions, setLunchOptions] = useState([]);
    const [otherLunchOptionChecked, setOtherLunchOptionChecked] = useState(false);
    const [otherLunchOption, setOtherLunchOption] = useState('');
    const [notesEntries, setNotesEntries] = useState([]);


    function handleTextInput(e) {
        const { name, value} = e.target;
        setTextInput(prev => ({...prev, [name]: value}));
    }

    function handleLunchOptionsInput(e) {
        const {value, checked} = e.target;

        if(value === "other") {
            setOtherLunchOptionChecked(checked);
            if(!checked) {
                setLunchOptions((prev) =>
                    prev.filter(opt => opt !== otherLunchOption)
                );
                setOtherLunchOption(""); //reset input when unchecked
            }
        } else {
            if (checked) {
                setLunchOptions((prev) => [...prev, value]);
            } else {
                setLunchOptions((prev) => prev.filter((option) => option !== value));
            }
        }
    }

    function handleOtherLunchOptionInput(e) {
        const value = e.target.value;
        setOtherLunchOption(value);

        // update lunch options list
        setLunchOptions((prev) => {
            const filtered = prev.filter(opt => opt !== otherLunchOption) //creates an array without "other"
            if (value.trim() === "") {
                return filtered;
                // as long as nothing is entered, the array is returned without any other lunch options
                // use trim to falsify if only space key is used
            }
            return [...filtered, value];
        })
    }

    const inputs = [
        { name: "firstName", label: "First name", id: "first_name", type: "text", },
        { name: "lastName", label: "Last name", id: "last_name", type: "text"},
        { name: "birthdate", label: "Birthdate", id: "birthdate", type: "date"},
        { name: "address", label: "Address", id: "address", type: "text" },
        { name: "homeroom", label: "Homeroom class number", id: "homeroom", type: "text"},
        { name: "studentId", label: "Student ID", id: "student_id", type: "text"}
    ];

    const lunchOptionsList = [ "standard", "vegetarian", "vegan", "halal", "kosher" ];
    // can be shortened to a string array as name and type are the same for each checkbox

    function handleSubmit(e) {
        e.preventDefault();
        const noteText = notesRef.current.value.trim();
        if (noteText) {
            setNotesEntries(prev => [
                {
                    id: Date.now() + Math.random(),
                    text: noteText
                }, ...prev]
            )};
            notesRef.current.value = '';
    }


    return (
        <div>
            <div id="form">
                <h2>Enter student info here:</h2>
                <form onSubmit={handleSubmit}>
                    {inputs.map(({name, label, id, type }) => (
                        <div className="input_field" key={name}>
                            <label htmlFor={id}>{label}: </label>
                            <input 
                                name={name}
                                type={type}
                                id={id}
                                onChange={handleTextInput}
                                value={textInput[name]}
                            />
                        </div>
                    ))}
                    <div className="checkboxes">
                        <h3>Preferred lunch options:</h3>
                            {lunchOptionsList.map(option => 
                                <div>
                                    <label htmlFor={option}>{option.charAt(0).toUpperCase() + option.slice(1)}</label>
                                    {/* Draw label from option variable: make first letter upper case and add string minus first letter */}
                                    <input 
                                        name="lunch"
                                        id={option}
                                        type="checkbox"
                                        checked={lunchOptions.includes(option)}
                                        onChange={handleLunchOptionsInput}
                                        value={option}
                                    />
                                </div>
                            )}
                            <div>
                                <label htmlFor="other">Other</label>
                                <input 
                                    name="lunch"
                                    id="other"
                                    type="checkbox"
                                    checked={otherLunchOptionChecked}
                                    onChange={handleLunchOptionsInput}
                                    value={"other"}
                                />
                                <input 
                                    name="lunch"
                                    id="other_lunch_option"
                                    type="text"
                                    onChange={handleOtherLunchOptionInput}
                                    value={otherLunchOption}
                                    disabled={!otherLunchOptionChecked}
                                    // Input field only active when box is checked
                                    required={otherLunchOptionChecked}
                                />
                            </div>
                    </div>
                    <div className="notes">
                        <h3>Notes: </h3>
                        <StudentNotes ref={notesRef} />
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
            
            <div id="input_output">
                <h2>Current input:</h2>
                <ul >
                    {textInput.firstName && <li>{`First name: ${textInput.firstName}`}</li>} 
                    {/* rendert den Listeneintrag nur, sobald es kein leerer String ist */}
                    {textInput.lastName && <li>{`Last name: ${textInput.lastName}`}</li>}
                    {textInput.birthdate && <li>{`Birthdate: ${textInput.birthdate}`}</li>}
                    {textInput.address && <li>{`Address: ${textInput.address}`}</li>}
                    {textInput.homeroom && <li>{`Homeroom class number: ${textInput.homeroom}`}</li>}
                    {textInput.studentId && <li>{`Student ID: ${textInput.studentId}`}</li>}
                    {lunchOptions.length > 0 && <li>{`Lunch Options: ${lunchOptions.join(", ")}`}</li>}
                </ul>
                <h3>Submitted Notes</h3>
                <ol>
                    {notesEntries.map((note) => (
                        <li key={note.id}>{note.text}</li>
                    ))}
                </ol>
            </div>
        </div>
    )
};

export default StudentForm;