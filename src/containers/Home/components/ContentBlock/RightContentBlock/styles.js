import styled from "styled-components";

export const RightBlockContainer = styled.section`
  padding: ${(props) =>
    props.last ? "8rem 0 10rem" : props.first ? "3rem 0 0rem" : "5rem 0 5rem"};

  @media only screen and (max-width: 768px) {
    padding: ${(props) => (props.last ? "3rem 0 3rem" : "3rem 0 3rem")};
  }
`;

export const Title = styled.h6``;

export const Content = styled.p`
  margin: 1.5rem 0 2rem 0;
`;

export const ContentWrapper = styled.div`
  position: relative;
  max-width: 540px;

  @media only screen and (max-width: 480px) {
    margin: 2rem 0;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 400px;
`;
