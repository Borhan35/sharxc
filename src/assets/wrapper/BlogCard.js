import styled from "styled-components";

const Wrapper = styled.div`
  .blog-img {
    width: 100%;
    height: 220px;
    position: relative;
    padding-left: 15px;
    margin-bottom: 12px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .title {
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
  .blog-content {
    padding-right: 0;
  }
  p {
    text-align: justify;
  }
  .btn {
    margin-left: auto;
    margin-top: 8px;
    width: 160px;
    height: 45px;
  }
  @media (min-width: 992px) {
    .blog-img {
      padding-left: 25px;
      margin-bottom: 18px;
      height: 301px;
      .title {
        font-size: 23px;
        padding: 12px 58px 12px 12px;
        bottom: 35px;
      }
    }
    .blog-content {
      padding-right: 12px;
    }
    .btn {
      width: 200px;
      height: 50px;
    }
  }
`;

export default Wrapper;
