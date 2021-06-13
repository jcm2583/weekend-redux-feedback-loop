import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function CommentsInput() {

    //declare dispatch
    const dispatch = useDispatch();
    //declare history
    const history = useHistory();
    //create a state for comments data
    const [commentsInput, setCommentsInput] = useState('');

    //create a function that send comments data to reducer
    const handleSubmit = (event) => {
        event.preventDefault();
        //use dispatch to send data to reducer
        dispatch({
            type: 'ADD_COMMENTS',
            payload: commentsInput
        })
        //clear input
        setCommentsInput('');
        //send to next page
        history.push('/reviewPage');
    }

    //create a function that allows a user to go to the previous page
    const goBack = () => {
        history.goBack();
    }

    return (
        <div>
            <h2>Any comments to add?</h2>
            <form onSubmit={handleSubmit}>
                <Button
                    style={{ marginRight: '32px' }}
                    variant="outlined"
                    color="secondary"
                    onClick={goBack}>Go Back
            </Button>
                <TextField
                    multiline
                    style={{ width: 300 }}
                    label="Add comment"
                    type="text"
                    onChange={(evt) => setCommentsInput(evt.target.value)} />

                <Button
                    style={{ marginLeft: '32px' }}
                    variant="outlined"
                    color="primary"
                    type="submit">Next
                </Button>
            </form>
        </div>
    )
}

export default CommentsInput;