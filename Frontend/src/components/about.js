import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import img1 from '../assets/images/img1.jpg';

function About() {

  return (
    <section id="about" className="block about-block">
      <Container fluid>
        <div className="title-holder">
          <h1>About Us</h1>
          <div className="subtitle">learn more about us</div>
        </div>
        <Row>
          <Col sm={6}>
            <Image src={img1} />
          </Col>
          <Col sm={6}>
            <br/><br/>
          <h4 >  MediEduMatch is not only your ordinary "MEDICAL COLLEGE PREDICTOR". It's your passion to a brighter
            medical career, tailored just for you. Say goodbye to the uncertainty of medical college admissions and
            hello to a future you've always dreamt of.
          </h4><br/>
          <h4>
            We reduce the effort of manually researching colleges
            . 
            we give 100% accurate information from official sources .
             We help students make informed decisions about their college options
          </h4>


          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;