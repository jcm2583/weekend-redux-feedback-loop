import {useHistory} from 'react-router-dom';
import Button from '@material-ui/core/Button';


function WelcomePage () {

    //declare history
    const history = useHistory();

    //create a function that allows the user to begin survey
    const beginSurvey = () => {
        history.push('/feelingInput')
    }

        return (
    
    <div>
        <h2>Welcome to our feedback survey!</h2>
        <h3>Please click the button below to begin</h3>
        <Button 
        variant="outlined"
        color="primary"
        onClick={beginSurvey}>Begin Feedback Survey
        </Button>
    </div>
    
    )

}

export default WelcomePage;