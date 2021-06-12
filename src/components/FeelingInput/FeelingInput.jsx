import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {useState} from 'react';

function FeelingInput () {

    // const [feelingInput, setFeelingInput] = useState();


    // const handleSubmit = () => {

    // }


    return (
        <div>
            <h2>How are you feeling today?</h2>
            <h3>Please choose a number between 1-7</h3>
            <form onSubmit="handleSubmit">
                <input type="number" />
            </form>
            <Link to='/understandingInput'>
            <button type="submit">Next</button>
            </Link>
        </div>
    )
}

export default FeelingInput;