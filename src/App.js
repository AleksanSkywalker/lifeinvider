import './App.css';
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route} from "react-router-dom";
import {addPost} from "./redux/state";

const App = (props) => {


    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                {/*<Navbar/>*/}

                <Navbar state={props.state.dialogsPage}/>


                <Header/>
                <div className='app-wrapper-content'>
                    {/*<Route path='/profile' component={Profile}/>*/}
                    {/*<Route path='/dialogs' component={Dialogs}/>*/}
                    <Route path='/profile'
                           render={ () => <Profile
                               state={props.state.profilePage}
                                addPost={props.addPost}/>}/>

                    <Route path='/dialogs' render={ () => <Dialogs state={props.state.dialogsPage}/>}/>


                    <Route path='/feeds' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

// by Aleksan Luman