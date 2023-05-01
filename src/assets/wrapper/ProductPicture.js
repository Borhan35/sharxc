import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  z-index: 0;
  margin-top: -55px;
  img {
    display: block;
    width: 100%;
    height: 903px;
    object-fit: cover;
  }
  .text-wrapper {
    padding: 0px 20px;
    width: 100%;
    position: absolute;
    bottom: 37px;
    z-index: 99;
    .btn {
      margin-left: auto;
      margin-right: auto;
    }
  }
  .overlay-text {
    background: #1c2636eb;
    width: 100%;
    max-width: 490px;
    box-sizing: border-box;
    padding: 20px 15px;
    text-align: justify;
    margin-bottom: 46px;
    margin-right: auto;
    margin-left: auto;
    p {
      color: var(--white);
    }
  }
  @media (min-width: 992px) {
    margin-top: -155px;
    img {
      height: 1003px;
    }
    .text-wrapper {
      position: absolute;
      right: 54px;
      bottom: 57px;
      z-index: 99;
      .btn {
        margin-right: 45px;
      }
    }
    .overlay-text {
      margin-right: 0;
      margin-bottom: 66px;
      padding: 41px 32px;
    }
  }
`;

export default Wrapper;
