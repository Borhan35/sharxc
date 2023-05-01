import styled from "styled-components";

const Wrapper = styled.ul`
  text-align: center;
  margin: 0;
  li {
    a {
      color: var(--white);
      transition: all 0.3s ease;
      &:hover {
        color: var(--green);
      }
    }
    &:not(:last-child) {
      margin-bottom: 7px;
    }
  }
  .active {
    a {
      color: var(--green);
    }
  }
  @media (min-width: 992px) {
    text-align: right;
  }
`;
export default Wrapper;
