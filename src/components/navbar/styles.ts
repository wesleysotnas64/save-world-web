import styled from "styled-components";

export const Container = styled.nav`
  width: 100%;
  display: flex;
  padding: 0.5rem 0;
  align-items: center;
  justify-content: space-around;
`;

export const Sections = styled.ul`
  display: flex;
`;

export const Section = styled.li`
  margin: 0 4.5rem;
  list-style-type: none;

  .button-section {
    color: #000;
    text-decoration: none;
    &:hover {
      color: green;
      cursor: pointer;
    }
  }

  .special {
    color: #fff;
    padding: 0.5rem;
    background-color: green;
    text-decoration: none;

    &:hover {
      cursor: pointer;
      background-color: #00a603;
    }
  }
`;

export const Logo = styled.img`
  height: 3rem;
  cursor: pointer;
`;
