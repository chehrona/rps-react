import React, { useState } from 'react';

import Header from './components/header/Header';
import GameBody from './components/gameBody/GameBody';
import NameBar from './components/nameBar/NameBar';

function App(): React.JSX.Element {
    const [playerName, setPlayerName] = useState('');
    return (
        <div className="app">
            <Header />
            <NameBar setPlayerName={setPlayerName} />
            <GameBody />
        </div>
    );
}

export default App;
