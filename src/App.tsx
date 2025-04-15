import Header from './components/header/Header';
import GameBody from './components/gameBody/GameBody';
import NameBar from './components/nameBar/NameBar';

function App(): React.JSX.Element {
    return (
        <div className="app">
            <Header />
            <NameBar />
            <GameBody />
        </div>
    );
}

export default App;
