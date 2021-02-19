import React from 'react';
import './App.css';

const App = () => {
    return (
        <div className='app-wrapper'>
            <header className='header'>
                <img src='data:image/png;base64,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'/>
            </header>
            <nav className='nav'>
                <div>
                    <a>Profile</a>
                </div>
                <div>
                    <a>Message</a>
                </div>
                <div>
                    <a>News</a>
                </div>
                <div>
                    <a>Music</a>
                </div>
                <div>
                    <a>Settings</a>
                </div>

            </nav>
            <div className='content'>
                <div>
                    <img src='https://img.gta5-mods.com/q95/images/functional-doors-inside-lifeinvader-interior/19446c-nJXleAGpUkiNrcyM2-elVA_0_0.jpg'/>
                </div>
                <div>
                    ava+description
                </div>
                <div>
                    My posts
                    <div>
                        new post
                    </div>
                    <div>post1</div>
                    <div>post2</div>
                </div>

            </div>
        </div>
    );
}

export default App;
