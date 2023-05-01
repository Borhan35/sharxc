import styled from "styled-components";

const Wrapper = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 15px;
  li {
    a {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      color: var(--white);
      font-size: 30px;
      transition: all 0.3s ease;
      &:hover {
        color: var(--green);
      }
    }
    &:not(:last-child) {
      margin-bottom: 0;
    }
  }
  @media (min-width: 688px) {
    display: block;
    flex-direction: column;
    gap: 0;
    li {
      &:not(:last-child) {
        margin-bottom: 18px;
      }
      a {
        font-size: 44px;
      }
    }
  }
`;

export default Wrapper;
