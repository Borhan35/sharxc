import styled from "styled-components";
import Background from "../img/hero-bg.png";

const Wrapper = styled.div`
  background: url(${Background}) no-repeat center;
  background-size: cover;
  z-index: 99;
  position: relative;
  overflow: hidden;
  .container {
    max-width: 1210px;
  }
  .content-center {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 473px;
    z-index: 0;
  }
  .social {
    position: absolute;
    top: 28px;
    left: 0;
    z-index: 10;
  }
  .logo {
    width: 220px;
    z-index: 20;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 10;
  }
  .logo img {
    width: 100%;
    height: 100%;
  }
  .hero-menu {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    position: absolute;
    right: 0;
    top: 0px;
    width: 100%;
    height: 100%;
    padding-top: 33px;
    padding-bottom: 88px;
    .icon {
      color: var(--green);
      display: none;
    }
    .menu {
      padding-right: 13px;
      padding-top: 30px;
      margin-top: 6px;
      height: 100%;
    }
  }
  .bar {
    background: transparent;
    outline: none;
    border: none;
    font-size: 30px;
    color: var(--white);
    position: absolute;
    top: 30px;
    right: 0;
    z-index: 30;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .sologan {
    position: absolute;
    left: 50%;
    bottom: 12px;
    transform: translate(-50%, -50%);
    font-family: var(--pfHighwaySansPro);
    font-size: 22px;
    line-height: 24px;
    color: var(--white);
    width: 100%;
    text-align: center;
    letter-spacing: 2px;
    span {
      color: var(--green);
      text-transform: uppercase;
    }
  }

  @media (min-width: 992px) {
    .content-center {
      min-height: 773px;
    }
    .logo {
      width: auto;
    }
    .hero-menu {
      .icon {
        display: block;
      }
      .menu {
        border-right: 1px solid var(--green);
        display: block;
      }
    }
    .bar {
      display: none;
    }
    .sologan {
      bottom: 58px;
      transform: translate(-50%, -50%);
      font-size: 45px;
      line-height: 41px;
      letter-spacing: 5px;
      span {
        color: var(--green);
        text-transform: uppercase;
      }
    }
  }
  @media (max-width: 992px) {
    .overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.8);
      z-index: 0;
    }
    .hero-menu {
      .menu {
        position: fixed;
        top: 0;
        right: 0;
        width: 250px;
        min-height: 100vh;
        background: var(--dark-blue);
        z-index: 21;
        padding-top: 80px;
        margin-top: 0;
      }
      .mobileMenu {
        display: none;
      }
    }
  }
`;
export default Wrapper;
