import './App.css';
import Desserts from './components/Desserts';

function App() {
  const desserts = [1,2,3];
  return (
    <div className="App">
      {desserts.map(dessert => (
        <Desserts/>
      ))}
    </div>
  );
}

export default App;
