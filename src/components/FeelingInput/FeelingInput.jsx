import {Link} from 'react-router-dom';

function FeelingInput () {


    return (
        <div>
        <h2>How did you feel?</h2>
        <Link to='/understandingInput'>
        <button>Next</button>
        </Link>
        </div>
    )
}

export default FeelingInput;