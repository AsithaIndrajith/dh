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
          icon="header-image.png"
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
          icon="bio-image.png"
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
              <Card
                hoverable
                cover={
                  <Image alt="example" src={`/img/gallery/result2019.jpg`} />
                }
              >
                <Meta title="Year 2017" description="GCE Advanced level" />
              </Card>
            </Fade>
          </Col>
          <Col className={classes.card} xs={24} xl={8}>
            <Fade bottom>
              <Card
                hoverable
                cover={
                  <Image alt="example" src={`/img/gallery/result2019.jpg`} />
                }
              >
                <Meta title="Year 2018" description="GCE Advanced level" />
              </Card>
            </Fade>
          </Col>
          <Col className={classes.card} xs={24} xl={8}>
            <Fade bottom>
              <Card
                hoverable
                cover={
                  <Image alt="example" src={`/img/gallery/result2019.jpg`} />
                }
              >
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
          icon="timetable.jpg"
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
              <Card
                hoverable
                cover={<img alt="example" src={`/img/gallery/review01.jpg`} />}
              >
                <Meta
                  avatar={
                    <Avatar size="large" src={`/img/gallery/reviewdp01.png`} />
                  }
                  title="තෙපුලි උමේෂා - Island Frist"
                  description="2015 A/L - Rathnawali Balika Vidyalaya"
                />
              </Card>
            </Fade>
          </Col>
          <Col className={classes.card} xs={24} xl={8}>
            <Fade bottom>
              <Card
                hoverable
                cover={<img alt="example" src={`/img/gallery/review02.jpg`} />}
              >
                <Meta
                  avatar={
                    <Avatar size="large" src={`/img/gallery/reviewdp02.png`} />
                  }
                  title="කළණි සමුද්‍රා රාජපක්ෂ - Island Frist"
                  description="2018 A/L - Rathnawali Balika Vidyalaya"
                />
              </Card>
            </Fade>
          </Col>
          <Col className={classes.card} xs={24} xl={8}>
            <Fade bottom>
              <Card
                hoverable
                cover={<img alt="example" src={`/img/gallery/review01.jpg`} />}
              >
                <Meta
                  avatar={
                    <Avatar size="large" src={`/img/gallery/reviewdp01.png`} />
                  }
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
          icon="samadhee.jpg"
        />
        <ContactFrom title={ContactBlock.title} content={ContactBlock.text} />
      </Container>
      <Footer />
    </>
  );
}
