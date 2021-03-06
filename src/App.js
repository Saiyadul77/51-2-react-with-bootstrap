import './App.css';
import { Button, Spinner } from 'react-bootstrap';
import CardGroup2 from './components/CardGroup2/CardGroup2';

function App() {
  return (
    <div className="App">
      <h1>React With Bootstrap</h1>
      <Button variant="danger">My Button</Button>
      <br />
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      <CardGroup2></CardGroup2>
    </div>
  );
}

export default App;
