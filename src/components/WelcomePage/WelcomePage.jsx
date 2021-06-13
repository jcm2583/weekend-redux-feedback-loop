import {useHistory} from 'react-router-dom';

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
        <button onClick={beginSurvey}>Begin Feedback Survey</button>
    </div>
    
    )

}

export default WelcomePage;