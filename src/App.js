import './App.css';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import NavbarContainer from './components/Navbar/NavbarContainer'
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Route, Routes } from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';
import LoginContainer from './components/Login/LoginContainer';
import React, { Suspense } from 'react';
import { connect } from 'react-redux';
import {initializeApp} from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';
import store from './redux/redux-store';
import { BrowserRouter } from 'react-router-dom';
import {Provider}  from 'react-redux';

let DialogesContainer = React.lazy(() => import('./components/Dialoges/DialogesContainer'))

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp()
  }
  render () {
    if(!this.props.initialized) {
      return <Preloader />
    }
    return (
      <div className="app-wrapper">  
        <Suspense fallback={<div>Loading...</div>}>   
          <HeaderContainer/>
          <NavbarContainer/>
          <div className='app-wrapper__content'>
            <Routes>
              <Route path='/profile/:userID?' element={<ProfileContainer/>}/>
              <Route path='/dialoges/*' element={<DialogesContainer/>}/>           
              <Route path='/news/*' element={<News/>}/>
              <Route path='/music/*' element={<Music/>}/>
              <Route path='/settings/*' element={<Settings/>}/>
              <Route path='/users/*' element={<UsersContainer/>}/>
              <Route path='/login/*' element={<LoginContainer/>}/>
            </Routes>
          </div>
        </Suspense>   
      </div>
    );
  };
}
const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})


let AppContainer = connect(mapStateToProps, {initializeApp})(App);

let MainApp = (props) => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <AppContainer/>
        </Provider>
      </BrowserRouter>
    </React.StrictMode>
  )
}

export default MainApp;