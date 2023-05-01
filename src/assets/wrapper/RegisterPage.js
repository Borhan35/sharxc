import styled from "styled-components";

const Wrapper = styled.div`
  padding-top: 60px;
  padding-bottom: 78px;
  .content {
    h2 {
      font-size: 33px;
      line-height: 40px;
      color: var(--dark-blue);
      text-transform: uppercase;
      margin-bottom: 25px;
      span {
        color: var(--green);
      }
    }
  }
  .row {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 15px;
  }
  @media (min-width: 992px) {
    padding-top: 100px;
    padding-bottom: 118px;
    .row {
      grid-gap: 55px;
    }
    .content {
      h2 {
        font-size: 41px;
        line-height: 55px;
        margin-bottom: 35px;
      }
    }
  }
`;

export default Wrapper;
