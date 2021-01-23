import './App.css';
import Header from './components/Header/Header';
import SwipeButtons from './components/swipeButtons/SwipeButtons';
import TinderCards from './components/TinderCards/TinderCards';

function App() {
  return (
    <div className="App">
       <Header/>
     <TinderCards/>
      <SwipeButtons/>
    </div>
  );
}

export default App;
