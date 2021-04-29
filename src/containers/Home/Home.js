import React from "react";
import ContactFrom from "./components/ContactForm";
import ContentBlock from "./components/ContentBlock";
import MiddleBlock from "./components/MiddleBlock";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Container from "./common/Container";
import ScrollToTop from "./common/ScrollToTop";
// import { Link, useRouteMatch, useHistory } from "react-router-dom";
import Introduction from "./content/introduction.json";
import FirstBlock from "./content/firstBlock.json";
import SecondBlock from "./content/secondBlock.json";
import ThirdBlock from "./content/thirdBlock.json";
import FourthBlock from "./content/fourthBlock.json";
import ContactBlock from "./content/contactBlock.json";
import Styles from "./globalStyles";
import { makeStyles } from "@material-ui/core/styles";
import { Row, Col, Card, Avatar, Image } from "antd";
import { Fade } from "react-reveal";
import * as S from "./components/MiddleBlock/styles";
import HEADERIMAGE from "../../assests/svg/header-image.png";
import BIOIMAGE from "../../assests/svg/bio-image.png";
import GALLERY1 from "../../assests/gallery/result2019.jpg";
import GALLERY2 from "../../assests/gallery/result2019.jpg";
import GALLERY3 from "../../assests/gallery/result2019.jpg";
import TIMETABLEIMAGE from "../../assests/svg/timetable.jpg";
import REVIEW1 from "../../assests/gallery/review01.jpg";
import REVIEW2 from "../../assests/gallery/review02.jpg";
// import REVIEW3 from "../../assests/gallery/review01.jpg";
import REVIEWDP1 from "../../assests/gallery/reviewdp01.png";
import REVIEWDP2 from "../../assests/gallery/reviewdp02.png";

import VENUEIMAGE from "../../assests/svg/samadhee.jpg";

const { Meta } = Card;
const useStyles = makeStyles((theme) => ({
  hero: {
    background: "#EFEFEF",
    width: "100%",
    padding: "10px 40px 0px 40px",
    [theme.breakpoints.down("md")]: {
      padding: "10px 20px 0px 20px",
    },
  },

  card: {
    padding: "10px",
  },

  cardContent: {
    borderRadius: "3px",
    minHeight: "100px",
    background: "#EFEFEF",
    padding: "20px",
  },
}));

export default function Home(props) {
  const classes = useStyles();
  // let history = useHistory();
  // let {path, url} = useRouteMatch();
  // let login = (e) => {
  //     e.preventDefault();
  //     history.push("/main/dashboard");
  // };
  return (
    <>
      <Styles />
      <ScrollToTop />
      <Header />
      <div className={classes.hero}>
        <ContentBlock
          type="right"
          first="true"
          title={Introduction.title}
          content={Introduction.text}
          button={Introduction.button}
          icon={HEADERIMAGE}
        />
      </div>
      <Container>
        <MiddleBlock
          title={FirstBlock.title}
          content={FirstBlock.text}
          button={FirstBlock.button}
        />
        <ContentBlock
          type="left"
          first="true"
          title={SecondBlock.title}
          content={SecondBlock.text}
          section={SecondBlock.section}
          icon={BIOIMAGE}
        />
        <Row
          type="flex"
          align="middle"
          style={{ textAlign: "center", marginBottom: "20px" }}
        >
          <Col className={classes.card} xs={24} xl={24}>
            <Fade bottom>
              <S.Title>Our Achievements</S.Title>
            </Fade>
          </Col>
          <Col className={classes.card} xs={24} xl={8}>
            <Fade bottom>
              <Card hoverable cover={<Image alt="example" src={GALLERY1} />}>
                <Meta title="Year 2017" description="GCE Advanced level" />
              </Card>
            </Fade>
          </Col>
          <Col className={classes.card} xs={24} xl={8}>
            <Fade bottom>
              <Card hoverable cover={<Image alt="example" src={GALLERY2} />}>
                <Meta title="Year 2018" description="GCE Advanced level" />
              </Card>
            </Fade>
          </Col>
          <Col className={classes.card} xs={24} xl={8}>
            <Fade bottom>
              <Card hoverable cover={<Image alt="example" src={GALLERY3} />}>
                <Meta title="Year 2019" description="GCE Advanced level" />
              </Card>
            </Fade>
          </Col>
        </Row>
        <ContentBlock
          type="right"
          first="true"
          title={ThirdBlock.title}
          content={ThirdBlock.text}
          icon={TIMETABLEIMAGE}
        />
        <br />
        <br />
        <Row
          type="flex"
          align="middle"
          style={{ textAlign: "left", marginTop: "20px" }}
        >
          <Col
            className={classes.card}
            style={{ textAlign: "center" }}
            xs={24}
            xl={24}
          >
            <Fade bottom>
              <S.Title>Success Stories</S.Title>
            </Fade>
          </Col>
          <Col className={classes.card} xs={24} xl={8}>
            <Fade bottom>
              <Card hoverable cover={<img alt="example" src={REVIEW1} />}>
                <Meta
                  avatar={<Avatar size="large" src={REVIEWDP1} />}
                  title="තෙපුලි උමේෂා - Island Frist"
                  description="2015 A/L - Rathnawali Balika Vidyalaya"
                />
              </Card>
            </Fade>
          </Col>
          <Col className={classes.card} xs={24} xl={8}>
            <Fade bottom>
              <Card hoverable cover={<img alt="example" src={REVIEW2} />}>
                <Meta
                  avatar={<Avatar size="large" src={REVIEWDP2} />}
                  title="කළණි සමුද්‍රා රාජපක්ෂ - Island Frist"
                  description="2018 A/L - Rathnawali Balika Vidyalaya"
                />
              </Card>
            </Fade>
          </Col>
          <Col className={classes.card} xs={24} xl={8}>
            <Fade bottom>
              <Card hoverable cover={<img alt="example" src={REVIEW1} />}>
                <Meta
                  avatar={<Avatar size="large" src={REVIEWDP1} />}
                  title="තෙපුලි උමේෂා - Island Frist"
                  description="2018 A/L - Rathnawali Balika Vidyalaya"
                />
              </Card>
            </Fade>
          </Col>
        </Row>
        <br />
        <ContentBlock
          type="left"
          first="true"
          title={FourthBlock.title}
          content={FourthBlock.text}
          icon={VENUEIMAGE}
        />
        <ContactFrom title={ContactBlock.title} content={ContactBlock.text} />
      </Container>
      <Footer />
    </>
  );
}
