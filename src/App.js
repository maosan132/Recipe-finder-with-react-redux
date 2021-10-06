import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import classes from './App.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './Routes';

const App = () => (
  <Container fluid="md">
    <Row>
      <Col>
        <div className={classes.App}>
          <Routes />
        </div>
      </Col>
    </Row>
  </Container>
);

export default App;
