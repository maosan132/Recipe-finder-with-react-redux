import Container from 'react-bootstrap/Container';
import classes from './App.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './Routes';

const App = () => (
  <Container fluid="md">
    <div className={classes.App}>
      <Routes />
    </div>
  </Container>
);

export default App;
