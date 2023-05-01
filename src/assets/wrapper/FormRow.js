import styled from "styled-components";

const Wrapper = styled.div`
  input {
    background: var(--white);
    width: 100%;
    height: 40px;
    border: none;
    outline: none;
    font-family: var(--boldFont);
    font-size: 16px;
    line-height: 26px;
    color: var(--dark-blue);
    padding: 5px 11px;
    margin-bottom: 15px;
    &::placeholder {
      color: var(--green);
      text-transform: uppercase;
    }
  }
  @media (min-width: 992px) {
    input {
      font-size: 18px;
    }
  }
`;

export default Wrapper;
