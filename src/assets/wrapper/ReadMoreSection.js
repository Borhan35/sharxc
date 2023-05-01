import styled from "styled-components";

const Wrapper = styled.section`
  clip-path: polygon(0 0, 100% 0%, 100% 93%, 50% 100%, 0 93%);
  min-height: 574px;
  padding: 44px 0;
  position: relative;
  z-index: 10;
  .heading {
    display: flex;
    align-items: center;
    font-size: 33px;
    text-transform: uppercase;
    color: var(--white);
    margin-bottom: 40px;
    img {
      margin-left: 5px;
      width: 25px;
      height: 20px;
    }
    span {
      font-size: 14px;
      line-height: 15px;
      color: var(--dark-blue);
      margin-left: 10px;
      align-self: flex-end;
    }
  }

  .companyWrap {
    .heading {
      span {
        color: var(--dark-blue);
      }
    }
  }
  .productWrap {
    .heading {
      span {
        color: var(--green);
      }
    }
  }

  .productWrap {
    .readmoreWrapper {
      p {
        color: var(--white);
      }
    }
  }

  .readmoreWrapper {
    display: grid;
    grid-template-columns: 1fr;
    align-items: flex-start;
    gap: 20px;
  }
  .readmoreWrapper p {
    text-align: justify;
    strong {
      color: var(--dark-blue);
    }
  }
  .readmore {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: var(--white);
    margin-top: 34px;
    transition: all 0.3s ease;
    cursor: pointer;
    svg {
      font-size: 55px;
      line-height: 55px;
      margin-top: -12px;
    }

    &:hover {
      color: var(--dark-blue);
    }
  }
  .productWrap {
    .readmore {
      &:hover {
        color: var(--green);
      }
    }
  }
  @media (min-width: 992px) {
    clip-path: polygon(0 0, 100% 0%, 100% 75%, 50% 100%, 0 75%);
    padding: 74px 0;
    .heading {
      font-size: 60px;
      margin-bottom: 60px;
      img {
        margin-left: 10px;
        width: auto;
        height: auto;
      }
      span {
        font-size: 18px;
        line-height: 22px;
        margin-left: 15px;
      }
    }
    .readmoreWrapper {
      grid-template-columns: 1fr 1fr;
      gap: 90px;
    }
    .readmore {
      margin-top: 54px;
      svg {
        font-size: 55px;
        margin-top: -12px;
      }
    }
  }
`;
export default Wrapper;
