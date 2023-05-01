import styled from "styled-components";

const Wrapper = styled.section`
  padding-bottom: 65px;
  .row {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
    gap: 40px;
  }
  @media (min-width: 992px) {
    padding-bottom: 115px;
    .row {
      gap: 55px;
    }
  }
`;

export default Wrapper;
