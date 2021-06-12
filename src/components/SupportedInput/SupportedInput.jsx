import {useHistory} from 'react-router-dom';
import {useState} from 'react';
import {useDispatch} from 'react-redux';

function SupportedInput () {

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

    return (
        <div>
            <h2>How supported do you feel?</h2>
            <form onSubmit={handleSubmit}>
                <input type="number" min="1" max="5" required="required" value={supportInput} 
                onChange={ (evt) => setSupportInput(evt.target.value)}/>
            <button type="submit">Next</button>
            </form>
        </div>
    )
}

export default SupportedInput;