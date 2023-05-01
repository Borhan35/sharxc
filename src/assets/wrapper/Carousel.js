import styled from "styled-components";
import prev from "../img/angle-left.png";
import next from "../img/angle-right.png";

const Wrapper = styled.div`
  .slick-slide > div {
    margin: 0 30px;
  }
  .slick-list {
    margin: 0 -30px;
  }
  .slick-arrow {
    width: 21px;
    height: 46px;
  }
  .slick-arrow::before {
    display: none;
  }
  .slick-prev {
    left: -52px;
    background: url(${prev}) no-repeat center center;
    background-size: contain;
  }
  .slick-next {
    right: -52px;
    background: url(${next}) no-repeat center center;
    background-size: contain;
  }
  @media (max-width: 1200px) {
    width: 92%;
    margin: 0 auto;
    .slick-prev {
      left: -35px;
    }
    .slick-next {
      right: -35px;
    }
  }
  @media (max-width: 992px) {
    width: 100%;
    .slick-slide > div {
      margin: 0 0;
    }
    .slick-list {
      margin: 0 0;
    }
    .slick-arrow {
      width: 15px;
      height: 33px;
      top: inherit;
      bottom: -15px;
      z-index: 39;
    }
    .slick-prev {
      left: 0;
    }
    .slick-next {
      left: 60px;
    }
  }
`;

export default Wrapper;
