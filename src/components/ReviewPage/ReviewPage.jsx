import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';

function ReviewPage() {

    //declare history
    const history = useHistory();
    //need to call on redux to bring in feedback information
    const feedback = useSelector(store => store.storeFeedbackReducer);

    //create a function that posts the data to the server
    const submitInfo = () => {
        console.log(feedback);
        axios.post('/feedback', feedback)
            .then(response => {
                console.log('Feedback posted. Response:', response);
            }).catch(err => {
                console.log('There was an error in th POST route', err);
            });
        //send to next page
        history.push('/submissionPage')
    }

    //create a function that allows a user to go to the previous page
    const goBack = () => {
        history.goBack();
    }

    return (
        <div>
            <h2>Review Your Responses</h2>

            <div>
                <h3>Feeling: {feedback.feeling}</h3>
                <h3>Understanding: {feedback.understanding}</h3>
                <h3>Support: {feedback.support}</h3>
                <h3>Comments: {feedback.comments}</h3>
            </div>

            <button onClick={goBack}>Go Back</button>
            <button onClick={submitInfo}>Submit</button>
        </div>
    )
}

export default ReviewPage;