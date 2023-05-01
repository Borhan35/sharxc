import styled from "styled-components";
import Background from "../img/footer-bg.png";

const Wrapper = styled.footer`
  background: url(${Background}) no-repeat center center;
  background-size: cover;
  object-fit: cover;
  .container {
    max-width: 1210px;
  }
  .row {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 44px 0;
    gap: 30px;
  }
  .social {
    padding-bottom: 40px;
  }
  .menu {
    padding-top: 30px;
  }
  @media (min-width: 668px) {
    .row {
      align-items: flex-start;
      justify-content: space-between;
      flex-direction: row;
    }
    .social {
      padding-bottom: 120px;
    }
    .menu {
      padding-top: 0;
    }
  }
`;

export default Wrapper;
