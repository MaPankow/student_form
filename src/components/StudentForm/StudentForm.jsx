import { useState } from "react";

function StudentForm() {
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


    return (
        <div>
            <div id="form">
                <h2>Enter student info here:</h2>
                <form>
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
                            <div>
                                <label htmlFor="standard">Standard/No preference</label>
                                <input 
                                    name="lunch"
                                    id="standard"
                                    type="checkbox"
                                    checked={lunchOptions.includes("standard")}
                                    onChange={handleLunchOptionsInput}
                                    value="standard"
                                />
                            </div>
                            <div>
                                <label htmlFor="vegetarian">Vegetarian</label>
                                <input 
                                    name="lunch"
                                    id="vegetarian"
                                    type="checkbox"
                                    checked={lunchOptions.includes("vegetarian")}
                                    onChange={handleLunchOptionsInput}
                                    value="vegetarian"
                                />
                            </div>
                            <div>
                                <label htmlFor="vegan">Vegan</label>
                                <input 
                                    name="lunch"
                                    id="vegan"
                                    type="checkbox"
                                    checked={lunchOptions.includes("vegan")}
                                    onChange={handleLunchOptionsInput}
                                    value="vegan"
                                />
                            </div>
                            <div>
                                <label htmlFor="halal">Halal</label>
                                <input 
                                    name="lunch"
                                    id="halal"
                                    type="checkbox"
                                    checked={lunchOptions.includes("halal")}
                                    onChange={handleLunchOptionsInput}
                                    value="halal"
                                />
                            </div>
                            <div>
                                <label htmlFor="kosher">Kosher</label>
                                <input 
                                    name="lunch"
                                    id="kosher"
                                    type="checkbox"
                                    checked={lunchOptions.includes("kosher")}
                                    onChange={handleLunchOptionsInput}
                                    value="kosher"
                                />
                            </div>
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
            </div>
        </div>
    )
};

export default StudentForm;