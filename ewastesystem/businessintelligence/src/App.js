import './index.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Grid from '@material-ui/core/Grid'

import Nav from './components/Nav'
import Home from './components/Home'
import FeatureOne from './components/FeatureOne'
import FeatureTwo from './components/FeatureTwo'
import FeatureThree from './components/FeatureThree'

function App() {
  return (
    <div>
      <main  style={{minHeight: '95vh'}}>
      <Router>
        <Nav />
      <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/dashboard' component={FeatureOne}/>
          <Route path='/ref' component={FeatureTwo}/>
          <Route path='/predictions' component={FeatureThree}/>
        </Switch>     
        </Router>
        </main>
        <footer>
        <AppBar position="static" style={{background: 'white', boxShadow: 'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px'}}>
            <Toolbar variant="dense">
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} lg={6} style={{textAlign:'center', color: '#5a5a61'}}>
                made with <span style={{color:'#3cb23a', fontSize:'18px'}}>&#10084;</span> by <span style={{color:'#3cb23a', fontSize: '17px', fontFamily: 'Pacifico'}}>Hawk Eyes</span>
              </Grid>
              <Grid item xs={12} md={6} lg={6} style={{textAlign:'center', color: '#5a5a61'}}>
                &copy; Team Hawk Eyes
              </Grid>
            </Grid>
            </Toolbar>
        </AppBar>
        </footer>
    </div>
  );
}

export default App;
