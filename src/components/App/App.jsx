import React from 'react';
import axios from 'axios';
import './App.css';
import { Route, HashRouter as Router, Link } from 'react-router-dom';
import '@fontsource/roboto';
import {ThemeProvider, createMuiTheme} from '@material-ui/core/styles';
// import { orange } from '@material-ui/core/colors';

//list of components
import FeelingInput from '../FeelingInput/FeelingInput';
import UnderstandingInput from '../UnderstandingInput/UnderstandingInput';
import SupportedInput from '../SupportedInput/SupportedInput';
import CommentsInput from '../CommentsInput/CommentsInput';
import ReviewPage from '../ReviewPage/ReviewPage';
import SubmissionPage from '../SubmissionPage/SubmissionPage';
import WelcomePage from '../WelcomePage/WelcomePage';

const theme = createMuiTheme ({
  palette: {
    primary: {
      main: '#D95313'  
    },
    secondary: {
      main: '#0A77B2'
    }
  }
})


function App() {

  return (
    <ThemeProvider theme={theme}>
  <Router>
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>

        <div>
          <Route path='/' exact>
            <WelcomePage />
          </Route>

          <Route path='/feelingInput'>
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
  </ThemeProvider>
  );
}

export default App;
