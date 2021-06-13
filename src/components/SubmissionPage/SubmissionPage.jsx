import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';


function SubmissionPage () {
    

    return (
        <div>
        <h2>Submitted!</h2>
        <Link to='/'>
        <Button
        variant="outlined"
        color="primary"
        >Start Another Submission!</Button>
        </Link>
        </div>
    )
}

export default SubmissionPage;