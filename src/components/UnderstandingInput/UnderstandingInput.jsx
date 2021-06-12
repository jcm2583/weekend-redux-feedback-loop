import {Link} from 'react-router-dom';

function UnderstandingInput () {

    return (
        <div>
        <h2>How well do you understand the material?</h2>
        <Link to='/supportedInput'>
        <button>Next</button>
        </Link>
        </div>
    )
}

export default UnderstandingInput;