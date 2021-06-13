import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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

    //create a function that allows a user to go to the previous page
    const goBack = () => {
        history.goBack();
    }

    return (
        <div>
            <h2>How well do you understand the material?</h2>
            <form onSubmit={handleSubmit}>
            <Button
                    style={{marginRight: '32px'}}
                    variant="outlined"
                    color="secondary"
                    onClick={goBack}>Go Back
            </Button>
            <TextField
                    label="1 - 5"
                    style={{ width: 300 }}
                    type="number"
                    InputProps={{ inputProps: { min: 1, max: 5 } }}
                    required="required"
                    value={understandingInput}
                    onChange={(evt) => setUnderstandingInput(evt.target.value)} />
                <Button
                    style={{marginLeft: '32px'}}
                    variant="outlined"
                    color="primary"
                    type="submit">Next
                </Button>
            </form>
            <h3>1 = Not at all...</h3>
            <h3>5 = I could teach this!</h3>
        </div>
    )
}

export default UnderstandingInput;