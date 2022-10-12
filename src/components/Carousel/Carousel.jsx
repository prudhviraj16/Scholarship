import Carousel from 'react-bootstrap/Carousel';
import styled from 'styled-components'


const Container = styled.div`
  width : 100%;
  margin-top : 1%;
  max-width : 80%;
  margin : 0 auto;
`

const Img = styled.img`
  max-height   : 500px;
  max-width : 100%;
  background-size : contain;
  border-radius : 10px;
  overflow : hidden;
`

function CarouselFadeExample() {

  return (
    <Container>
    <Carousel fade style={{marginTop : "20px",borderRadius:"20px"}}>
      <Carousel.Item >
        <Img
          className="d-block w-100"
          src="https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="First slide"
         />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Img
          className="d-block w-100"
          src="https://images.pexels.com/photos/901965/pexels-photo-901965.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Img
          className="d-block w-100"
          src="https://images.pexels.com/photos/4386366/pexels-photo-4386366.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Third slide"
        />

        <Carousel.Caption >
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </Container>
  );
}

export default CarouselFadeExample;