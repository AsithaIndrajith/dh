import styled from "styled-components";

export const MiddleBlock = styled.section`
  position: relative;
  padding: 5rem 0 5rem;
  text-align: center;
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 768px) {
    padding: 3rem 0 3rem;
  }
`;

export const Title = styled.h6``;

export const Content = styled.p`
  padding: 0.75rem 0 0.75rem;
`;

export const ContentWrapper = styled.div`
  max-width: 570px;

  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`;
