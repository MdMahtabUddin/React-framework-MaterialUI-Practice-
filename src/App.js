import logo from './logo.svg';
import './App.css';
import { Button, Rating } from '@mui/material';
import Newspaper from './Component/Newspaper/Newspaper';
function App() {
  return (
    <div className="App">
      <Button variant="contained" >Helo </Button>

     
 <Rating name="read-only" value={5} readOnly />
 <Newspaper></Newspaper>
    </div>
  );
}

export default App;
