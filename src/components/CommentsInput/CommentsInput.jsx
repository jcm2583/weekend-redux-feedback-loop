import {Link} from 'react-router-dom';

function CommentsInput () {

    return (
        <div>
        <h2>Do you have any comments?</h2>
        <Link to='/reviewPage'>
        <button>Next</button>
        </Link>
        </div>
    )
}

export default CommentsInput;