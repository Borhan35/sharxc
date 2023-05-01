import styled from "styled-components";

const Wrapper = styled.section`
  padding-top: 45px;
  padding-bottom: 80px;
  .row {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
    grid-gap: 42px;
  }
  .content {
    h2 {
      font-size: 27px;
      line-height: 35px;
      margin-bottom: 20px;
      text-transform: uppercase;
      color: var(--dark-blue);
    }
    p {
      text-align: justify;
      &:not(:last-of-type) {
        margin-bottom: 20px;
      }
    }
  }
  @media (min-width: 992px) {
    padding-top: 95px;
    padding-bottom: 190px;
    .row {
      grid-gap: 62px;
    }
    .content {
      h2 {
        font-size: 41px;
        line-height: 47px;
        margin-bottom: 30px;
        text-transform: uppercase;
      }
      p {
        &:not(:last-of-type) {
          margin-bottom: 40px;
        }
      }
    }
  }
`;

export default Wrapper;
