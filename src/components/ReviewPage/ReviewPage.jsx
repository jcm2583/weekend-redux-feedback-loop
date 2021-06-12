import { Link } from 'react-router-dom';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux'; 
import {useEffect} from 'react';

function ReviewPage() {
    
    useEffect( () => {
        console.log('In useEffect');
        getResponses()
    }, [])

    //create a variable to use dispatch
    const dispatch = useDispatch();

    //need to call on redux to bring in feedback information
    const feedbackInfo = useSelector(store => store.feedbackReducer);
    
    //create a function to GET data from server
    function getResponses () {
        // use axios to call server
        axios.get('/feedback')
        .then( response => {
            console.log(response.data);
            //send data from server to be stored in redux
            dispatch({
                type: 'GET_FEEDBACK',
                payload: response.data
            })
        }).catch( err => {
            console.log('There was an error in the GET route', err);
        });
    }

    return (
        <div>
            <h2>Review Your Responses</h2>
                <div>
                {feedbackInfo.map( (feedback, id) =>
                (<div key={id}>
                    <h3>Feeling: {feedback.feeling}</h3>
                    <h3>Understanding: {feedback.understanding}</h3>
                    <h3>Support: {feedback.support}</h3>
                    <h3>Comments: {feedback.comments}</h3>
                </div>
                ))}
                </div>
            <Link to='/submissionPage'>
                <button>Submit</button>
            </Link>
        </div>
    )
}

export default ReviewPage;