import {Link} from 'react-router-dom';

function SupportedInput () {

    return (
        <div>
        <h2>How supported do you feel?</h2>
        <Link to='/commentsInput'>
        <button>Next</button>
        </Link>
        </div>
    )
}

export default SupportedInput;