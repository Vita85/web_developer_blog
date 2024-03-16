import Button from "./components/Button";
import './styles/index.scss';

function App() {
  return (
    <main>
      <Button color="primary">
        React app
      </Button> 
      <Button color="primary" variant="outlined">
        React app
      </Button> 
      <Button color="primary" variant="soft">
        React app
      </Button> 
      <Button color="secondary">
        React app
      </Button> 
      <Button color="secondary" variant="outlined">
        React app
      </Button> 
      <Button color="secondary" variant="soft">
        React app
      </Button> 
      <Button color="error">
        React app
      </Button> 
      <Button color="error" variant="outlined">
        React app
      </Button> 
      <Button color="error" variant="soft">
        React app
      </Button> 
      <Button color="success">
        React app
      </Button> 
      <Button color="success" variant="outlined">
        React app
      </Button> 
      <Button color="success" variant="soft">
        React app
      </Button> 
      <Button color="primary" disabled>
        React app
      </Button> 
    </main>
  )
}

export default App;
