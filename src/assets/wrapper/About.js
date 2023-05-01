import styled from "styled-components";

const Wrapper = styled.div`
  padding-top: 40px;
  padding-bottom: 60px;
  h2 {
    font-size: 33px;
    line-height: 38px;
    text-transform: uppercase;
    margin-bottom: 17px;
  }
  .content {
    column-count: 1;
    gap: 0 20px;
    padding-bottom: 20px;
    p {
      text-align: justify;
      margin-bottom: 16px;
      strong {
        font-family: var(--bodyFont);
        font-weight: normal;
      }
    }
    .image {
      display: flex;
      justify-content: center;
      img {
        max-width: 100%;
        height: auto;
        margin-bottom: 15px;
        margin-left: auto;
        margin-right: auto;
      }
    }
  }
  .btn {
    margin: 0 auto;
    &::after {
      right: 13px;
    }
  }

  @media (min-width: 992px) {
    padding-top: 66px;
    padding-bottom: 80px;
    h2 {
      font-size: 41px;
      line-height: 55px;
      margin-bottom: 27px;
    }
    .content {
      column-count: 2;
      gap: 0 50px;
      padding-bottom: 35px;
      p {
        margin-bottom: 30px;
      }
      img {
        margin-bottom: 25px;
      }
    }
  }
`;

export default Wrapper;
