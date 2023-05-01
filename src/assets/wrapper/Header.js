import styled from "styled-components";
import headerBg from "../img/share-header-bg.png";

const Wrapper = styled.header`
  background: url(${headerBg}) no-repeat center center;
  background-size: cover;
  display: flex;
  align-items: center;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 0px;
  padding-right: 0px;
  .container {
    max-width: 1190px;
  }
  .logo {
    a {
      display: flex;
      justify-content: flex-start;
      p {
        text-align: left;
      }
    }
  }
  .row {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  .menu {
    margin-left: auto;
    margin-bottom: -15px;
    align-self: flex-end;
    display: block;
    transition: all 0.3s ease;
    .icon {
      color: var(--green);
      display: flex;
      justify-content: flex-end;
      margin-bottom: 8px;
      svg {
        font-size: 18px;
      }
    }
    span {
      display: block;
      color: var(--white);
      text-transform: capitalize;
      border-right: 2px solid var(--green);
      padding-right: 12px;
      padding-top: 65px;
      padding-bottom: 20px;
      cursor: pointer;
      &:hover {
        color: var(--green);
      }
    }
  }
  .social {
    display: none;
  }
  @media (min-width: 992px) {
    padding-top: 25px;
    padding-bottom: 20px;
    padding-left: 37px;
    padding-right: 60px;
    .logo {
      margin-left: 66px;
      a {
        justify-content: flex-start;
      }
    }
    .social {
      display: flex;
    }
    .menu {
      margin-bottom: -20px;
      .icon {
        margin-bottom: 12px;
        svg {
          font-size: 24px;
        }
      }
      span {
        padding-top: 95px;
        padding-bottom: 20px;
      }
    }
  }
`;

export default Wrapper;
