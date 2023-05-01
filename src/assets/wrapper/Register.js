import styled from "styled-components";
import registerBg from "../img/register-bg.png";
import loginBg from "../img/login-bg.png";

const Wrapper = styled.div`
  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-bottom: 40px;
    img {
      width: 60px;
    }
    span {
      font-size: 20px;
      line-height: 24px;
      font-family: var(--pfHighwaySansPro);
      color: var(--green);
      letter-spacing: 3px;
      text-transform: uppercase;
    }
  }
  .form-center {
    box-sizing: border-box;
  }
  .register-bg {
    background: url(${registerBg}) no-repeat center center;
    background-size: cover;
    padding: 30px 20px;
  }
  .login-bg {
    background: url(${loginBg}) no-repeat center center;
    background-size: cover;
    padding: 30px 20px;
    .btn {
      margin-top: 17px;
    }
    .forget-password {
      font-size: 18px;
      line-height: 24px;
      font-family: var(--pfHighwaySansPro);
      color: var(--green);
      letter-spacing: 2px;
      display: flex;
      justify-content: center;
      margin-top: 15px;
    }
  }
  .form-group {
    margin-bottom: 30px;
  }
  .form-group input {
    padding: 0;
    height: initial;
    width: initial;
    margin-bottom: 0;
    display: none;
    cursor: pointer;
  }

  .form-group label {
    position: relative;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    font-size: 20px;
    line-height: 24px;
    font-family: var(--pfHighwaySansPro);
    color: var(--green);
    letter-spacing: 3px;
  }

  .form-group label::after {
    content: "";
    -webkit-appearance: none;
    background-color: var(--white);
    border: 2px solid var(--white);
    padding: 10px;
    display: inline-block;
    position: relative;
    vertical-align: middle;
    cursor: pointer;
    margin-left: 15px;
  }

  .form-group input:checked + label::before {
    content: "";
    display: block;
    position: absolute;
    top: 2px;
    right: 9px;
    width: 6px;
    height: 14px;
    border: solid var(--green);
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
    z-index: 10;
  }

  .btn {
    background: var(--green);
    color: var(--dark-blue);
    margin: 0 auto;
    transition: all 0.3s ease;
    &:hover {
      background: #00c893;
    }
  }

  @media (min-width: 992px) {
    .register-bg {
      padding: 40px 60px 60px 48px;
    }
    .login-bg {
      padding: 40px 72px 70px 37px;
      .forget-password {
        font-size: 20px;
        line-height: 24px;
        letter-spacing: 3px;
        margin-top: 15px;
      }
    }
  }
`;

export default Wrapper;
