import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

function UnderstandingInput() {

    //declare dispatch
    const dispatch = useDispatch();
    //declare history
    const history = useHistory();

    //declare a state for understanding data
    const [understandingInput, setUnderstandingInput] = useState('');

    //create a function that will grab the user input
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('The value of the understanding input is', understandingInput);
        //dispatch the data to the reducer
        dispatch({
            type: 'ADD_UNDERSTANDING',
            payload: understandingInput
        })
        //clear input
        setUnderstandingInput('');
        //send to next page
        history.push('/supportedInput');
    }

    return (
        <div>
            <h2>How well do you understand the material?</h2>
            <form onSubmit={handleSubmit}>
                <input type="number" min="1" max="5" required="required" value={understandingInput}
                    onChange={(evt) => setUnderstandingInput(evt.target.value)} />
                <button type="submit">Next</button>
            </form>
        </div>
    )
}

export default UnderstandingInput;