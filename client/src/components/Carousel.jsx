import { Card, Button, Carousel } from "react-bootstrap";
import { BsFillCaretRightFill } from "react-icons/bs";
import Images from "../img/theWitcher.png";
import theWitcher from "../img/thewitcher 1.png";
import Joker from "../img/joker.png";
import jokerTitles from "../img/gothic-joker 1.png";
import GenreMovies from "../img/Genre.png";
import GenreTV from "../img/GenreTV.png";
import LeCasaCover from "../img/LeCasa.jpg";
import LeCasaTitle from "../img/la-casa-de-papel-logo-png-1 1.png";

function ImgOverlayExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <Card.Img style={{ width: "85rem", height: "45rem" }} src={Images} alt="Card image" />
        <Card.ImgOverlay style={{ marginTop: "200px", marginLeft: "50px" }}>
          <Card.Title>
            <img src={theWitcher} style={{ marginBottom: "30px" }} alt="" />
          </Card.Title>
          <Card.Text style={{ color: "whitesmoke", width: "45rem", fontSize: "20px", textShadow: "1px 1px grey", marginBottom: "20px", fontWeight: "bold" }}>
            The Witcher follows the story of Geralt of Rivia, a solitary monster hunter, who struggles to find his place in a world where people often prove more wicked than monsters and beasts.
          </Card.Text>
          <Card.Text style={{ fontSize: "30px", color: "white" }}>
            <p style={{ fontSize: "25px" }}>
              2019
              <img style={{ marginLeft: "30px" }} src={GenreTV} />
            </p>
          </Card.Text>
          <Button style={{ marginTop: "40px", color: "white", backgroundColor: "red", width: "200px", height: "40px", fontWeight: "bold", border: "1px solid red" }} variant="dark">
            <BsFillCaretRightFill style={{ marginRight: "10px", fontSize: "20px" }} />
            Watch Now
          </Button>
        </Card.ImgOverlay>
      </Carousel.Item>
      <Carousel.Item>
        <Card.Img style={{ width: "85rem", height: "45rem" }} src={Joker} alt="Card image" />
        <Card.ImgOverlay style={{ marginTop: "200px", marginLeft: "50px" }}>
          <Card.Title>
            <img src={jokerTitles} style={{ marginBottom: "30px" }} alt="" />
          </Card.Title>
          <Card.Text style={{ width: "45rem", fontSize: "20px", marginBottom: "20px", fontWeight: "bold", color: "whitesmoke" }}>
            In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the
            Joker.
          </Card.Text>
          <Card.Text style={{ fontSize: "30px", color: "white" }}>
            <p style={{ fontSize: "25px" }}>
              2019
              <img style={{ marginLeft: "30px" }} src={GenreMovies} />
            </p>
          </Card.Text>
          <Button style={{ marginTop: "40px", color: "white", backgroundColor: "red", width: "200px", height: "40px", fontWeight: "bold", border: "1px solid red" }} variant="dark">
            <BsFillCaretRightFill style={{ marginRight: "10px", fontSize: "20px" }} />
            Watch Now
          </Button>
        </Card.ImgOverlay>
      </Carousel.Item>
      <Carousel.Item>
        <Card.Img style={{ width: "85rem", height: "45rem" }} src={LeCasaCover} alt="Card image" />
        <Card.ImgOverlay style={{ marginTop: "200px", marginLeft: "50px" }}>
          <Card.Title>
            <img src={LeCasaTitle} style={{ marginBottom: "30px" }} alt="" />
          </Card.Title>
          <Card.Text style={{ width: "45rem", fontSize: "20px", marginBottom: "20px", fontWeight: "bold", color: "whitesmoke" }}>
          Money Heist is a crime drama on Netflix - originally called La Casa de Papel. Money Heist season 3 has just been released by the streaming service. The plot reads: "Eight thieves take hostages and lock themselves in the Royal Mint of Spain as a criminal mastermind manipulates the police to carry out his plan.
          </Card.Text>
          <Card.Text style={{ fontSize: "30px", color: "white" }}>
            <p style={{ fontSize: "25px" }}>
              2017
              <img style={{ marginLeft: "30px" }} src={GenreTV} />
            </p>
          </Card.Text>
          <Button style={{ marginTop: "40px", color: "white", backgroundColor: "red", width: "200px", height: "40px", fontWeight: "bold", border: "1px solid red" }} variant="dark">
            <BsFillCaretRightFill style={{ marginRight: "10px", fontSize: "20px" }} />
            Watch Now
          </Button>
        </Card.ImgOverlay>
      </Carousel.Item>
    </Carousel>
  );
}

export default ImgOverlayExample;
