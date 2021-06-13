import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


function SupportedInput() {

    //declare dispatch
    const dispatch = useDispatch();
    //declare history
    const history = useHistory();
    //create a state for support data
    const [supportInput, setSupportInput] = useState('');

    //create a function to send support data to reducer
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('The value of support input is', supportInput);
        //dispatch data to reducer
        dispatch({
            type: 'ADD_SUPPORT',
            payload: supportInput
        })
        //clear input
        setSupportInput('');
        //send to next page
        history.push('/commentsInput')
    }

    //create a function that allows a user to go to the previous page
    const goBack = () => {
        history.goBack();
    }

    return (
        <div>
            <h2>How supported do you feel?</h2>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="1 - 5"
                    style={{ width: 300 }}
                    type="number"
                    InputProps={{ inputProps: { min: 1, max: 5 } }}
                    required="required"
                    value={supportInput}
                    onChange={(evt) => setSupportInput(evt.target.value)} />
                <Button
                    variant="outlined"
                    color="secondary"
                    onClick={goBack}>Go Back
            </Button>
                <Button
                    variant="outlined"
                    color="primary"
                    type="submit">Next
            </Button>
            </form>
            <h3>1 = What support?</h3>
            <h3>5 = Couldn't ask for more! This is awesome!</h3>
        </div>
    )
}

export default SupportedInput;