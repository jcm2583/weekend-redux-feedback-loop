import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './FeelingInput.css';

function FeelingInput() {
    
    //declare dispatch 
    const dispatch = useDispatch();
    //declare history
    const history = useHistory();

    //create a state that stores the feeling data
    const [feelingInput, setFeelingInput] = useState('');

    //create a function that dispatches the data to the reducer 
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('The value of the feeling input is', feelingInput);
        //send the data to the reducer
        dispatch({
            type: 'ADD_FEELING',
            payload: feelingInput
        })
        //clear input
        // setFeelingInput('');
        //send to next page 
        history.push('/understandingInput');

    }

    return (
        <div>
            <h2>How are you feeling today?</h2>
            <h3>Please select a number between 1-5</h3>
            <form onSubmit={handleSubmit}>
                <TextField
                type="number" 
                InputProps={{ inputProps: { min: 1, max: 5 } }}
                required="required" 
                value={feelingInput}
                onChange={(evt) => setFeelingInput(evt.target.value)} />
                <Button 
                type="submit"
                variant="outlined" 
                color="primary"> Next 
                </Button>
            </form>
        </div>
    )
}

export default FeelingInput;