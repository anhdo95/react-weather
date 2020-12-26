import { useSelector } from 'react-redux'
import { selectedIsAuthenticated } from '@/store/user'
import './App.css';

function App(props: any) {
  const isAuthenticated = useSelector(selectedIsAuthenticated)
  console.log('isAuthenticated :>> ', isAuthenticated);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
