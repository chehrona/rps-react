import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import PlayerBoard from './components/playerBoard/PlayerBoard';

function App() {
    return (
        <div className="App">
            <Header />
            <PlayerBoard />
        </div>
    );
}

export default App;
