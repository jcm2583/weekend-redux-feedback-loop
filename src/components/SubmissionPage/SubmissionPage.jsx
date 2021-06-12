import {Link} from 'react-router-dom';

function SubmissionPage () {
    

    return (
        <div>
        <h2>Submitted!</h2>
        <Link to='/'>
        <button>Start Another Submission!</button>
        </Link>
        </div>
    )
}

export default SubmissionPage;