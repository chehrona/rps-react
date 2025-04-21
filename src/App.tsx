import React from 'react';

import Header from './components/header/Header';
import GameBody from './components/gameBody/GameBody';
import NameBar from './components/nameBar/NameBar';
import { GameProvider } from './hooks/useGame';

function App(): React.JSX.Element {
    return (
        <GameProvider>
            <div className="app">
                <Header />
                <NameBar />
                <GameBody />
            </div>
        </GameProvider>
    );
}

export default App;
