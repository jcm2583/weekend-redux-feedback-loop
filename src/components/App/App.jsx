import React from 'react';
import axios from 'axios';
import './App.css';
import { Route, HashRouter as Router, Link } from 'react-router-dom';
import FeelingInput from '../FeelingInput/FeelingInput';
import UnderstandingInput from '../UnderstandingInput/UnderstandingInput';
import SupportedInput from '../SupportedInput/SupportedInput';
import CommentsInput from '../CommentsInput/CommentsInput';
import ReviewPage from '../ReviewPage/ReviewPage';
import SubmissionPage from '../SubmissionPage/SubmissionPage';


function App() {

  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>


        <div>
          <Route path='/' exact>
            <FeelingInput />
          </Route>
          <Route path='/understandingInput'>
            <UnderstandingInput />
          </Route>
          <Route path='/supportedInput'>
            <SupportedInput />
          </Route>
          <Route path='/commentsInput'>
            <CommentsInput />
          </Route>
          <Route path='/reviewPage'>
            <ReviewPage />
          </Route>
          <Route path='/submissionPage'>
            <SubmissionPage />
          </Route>
        </div>

      </div>
    </Router>
  );
}

export default App;
