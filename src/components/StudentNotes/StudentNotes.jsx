import { useRef } from 'react';

export default function StudentNotes() {

    const notesRef = useRef('');

    const handleSubmit = (e) => {

        e.preventDefault();

        const notes = notesRef.current.value;
        alert (
            `Notes: ${notes}`
        );
        
    };

    return (
        <div className="input_field">
            <label htmlFor="notes">Enter notes: </label>
            <textarea
                name="notes"
                id="notes"
                ref={notesRef}
            ></textarea>
            <button onSubmit={handleSubmit} value="Submit">Submit</button>
        </div> 
    )
}