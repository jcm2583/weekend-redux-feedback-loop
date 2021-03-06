import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Please choose a number between 1-5"
                    style={{ width: 300 }}
                    type="number"
                    InputProps={{ inputProps: { min: 1, max: 5 } }}
                    required="required"
                    value={feelingInput}
                    onChange={(evt) => setFeelingInput(evt.target.value)} />
                <Button
                    style={{marginLeft: '32px'}}
                    type="submit"
                    variant="outlined"
                    color="primary"> Next
                </Button>
            </form>
            <h3>1 = I have had better days...</h3>
            <h3>5 = Feeling great!</h3>
        </div>
    )
}

export default FeelingInput;