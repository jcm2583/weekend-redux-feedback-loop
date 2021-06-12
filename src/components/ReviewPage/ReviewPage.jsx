import { Link } from 'react-router-dom';

function ReviewPage() {

    return (
        <div>
            <h2>Review Your Responses</h2>
            <Link to='/submissionPage'>
                <button>Submit</button>
            </Link>
        </div>
    )
}

export default ReviewPage;