import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

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

    return (
        <div>
            <h2>Do you have any comments?</h2>
            <form onSubmit={handleSubmit}>
                <input type="text"
                    onChange={(evt) => setCommentsInput(evt.target.value)} />
                <button type="submit">Next</button>
            </form>
        </div>
    )
}

export default CommentsInput;