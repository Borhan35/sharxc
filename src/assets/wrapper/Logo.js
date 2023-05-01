import styled from "styled-components";

const Wrapper = styled.div`
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    text-align: center;
    gap: 15px;
    img {
      max-width: 155px;
    }
    p {
      font-family: var(--pfHighwaySansPro);
      color: var(--white);
      font-size: 14px;
      line-height: 16px;
      letter-spacing: 2px;
      span {
        text-transform: uppercase;
        color: var(--green);
      }
    }
  }
  @media (min-width: 992px) {
    a {
      gap: 35px;
      img {
        max-width: 225px;
      }
      p {
        font-size: 20px;
        line-height: 24px;
        letter-spacing: 3px;
      }
    }
  }
`;

export default Wrapper;
