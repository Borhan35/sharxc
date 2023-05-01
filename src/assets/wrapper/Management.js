import styled from "styled-components";

const Wrapper = styled.section`
  padding: 40px 0;
  h4 {
    display: flex;
    align-items: center;
    gap: 4px;
    padding-bottom: 40px;
    .icon {
      font-size: 50px;
      color: var(--green);
    }
  }
  .partner-content {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    gap: 50px;
    max-width: 760px;
    margin: 0 auto;
    .item {
      text-align: center;
      margin: 0 auto;
      .partner-img {
        width: 228px;
        height: 228px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        margin-bottom: 28px;
      }
      .partner-img img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      strong {
        font-family: var(--boldFont);
        text-transform: uppercase;
        color: var(--green);
      }
    }
    .big-logo {
      max-width: 218px;
      margin: 0 auto;
      img {
        max-width: 100%;
        height: auto;
      }
    }
  }
  @media (min-width: 778px) {
    padding: 70px 0;
    .partner-content {
      flex-direction: row;
    }
    .big-logo {
      padding-top: 22px;
    }
  }
`;

export default Wrapper;
