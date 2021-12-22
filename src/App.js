import logo from './logo.svg';
import './App.css';
import Counter from './components/Hooks/Hook'
import Team from './components/Team/TeamComponent'
import Worker from './components/Worker/WorkerComponent';
function App() {
  return (
    <div className="App">
         {/* <Counter/> */}
         {/* <Team/> */}
         <Worker/>
    </div>

  );
}

export default App;
