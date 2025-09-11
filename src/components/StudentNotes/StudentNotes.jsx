import { forwardRef } from 'react';

function StudentNotes(props, ref) {

    return (
        <div className="input_field">
            <label htmlFor="notes">Enter notes: </label>
            <textarea
                name="notes"
                id="notes"
                ref={ref}
                maxLength="200"
                placeholder="Enter text here (max. 200 characters)"
            ></textarea>
        </div> 
    )
}

export default forwardRef(StudentNotes);