import Header from './components/header/Header';
import GameBody from './components/gameBody/GameBody';
import { MainContainer } from './appStyles';

function App() {
    return (
        <MainContainer>
            <Header />
            <GameBody />
        </MainContainer>
    );
}

export default App;
