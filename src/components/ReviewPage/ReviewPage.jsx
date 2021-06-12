import { Link } from 'react-router-dom';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux'; 
import {useEffect} from 'react';

function ReviewPage() {
    

    //need to call on redux to bring in feedback information
    const feedback = useSelector(store => store.storeFeedbackReducer);

    //create a function that posts the data to the server
    const submitInfo = () => {
        
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
     
            <Link to='/submissionPage'>
                <button onClick={submitInfo}>Submit</button>
            </Link>
        </div>
    )
}

export default ReviewPage;