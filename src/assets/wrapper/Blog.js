import styled from "styled-components";

const Wrapper = styled.div`
  padding-top: 40px;
  .blog-image {
    width: 100%;
    height: 230px;
    position: relative;
    padding-left: 14px;
    padding-right: 0;
    margin-bottom: 20px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .blog-title {
      position: absolute;
      left: 0;
      bottom: 20px;
      font-size: 18px;
      background: var(--green);
      color: var(--dark-blue);
      text-transform: uppercase;
      width: fit-content;
      padding: 8px 38px 8px 8px;
    }
  }
  .blog-content-body {
    padding-bottom: 50px;
    column-count: 1;
    column-gap: 0;
    p {
      margin-bottom: 20px;
    }
  }
  p {
    text-align: justify;
  }

  .slider-wrp {
    background: #dedfdf;
    padding: 60px 0;
    h5 {
      font-size: 18px;
      color: var(--dark-blue);
      text-transform: uppercase;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      margin-bottom: 40px;
      img {
        width: 15px;
      }
    }
  }

  @media (min-width: 992px) {
    padding-top: 78px;
    .blog-image {
      height: 301px;
      padding-left: 24px;
      padding-right: 44px;
      margin-bottom: 56px;
      .blog-title {
        font-size: 23px;
        padding: 16px 58px 16px 20px;
        bottom: 30px;
      }
    }
    .blog-content-body {
      padding-bottom: 100px;
      column-count: 2;
      column-gap: 55px;
      p {
        margin-bottom: 38px;
      }
    }
    .slider-wrp {
      h5 {
        gap: 18px;
        margin-bottom: 55px;
        img {
          width: auto;
        }
      }
    }
  }
`;

export default Wrapper;
