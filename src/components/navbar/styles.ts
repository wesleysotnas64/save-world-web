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

  #special {
    color: #fff;
    padding: .5rem;
    background-color: green;

    &:hover {
      background-color: #00A603;
    }
  }
`;

export const Link = styled.a`
  color: #000;
  text-decoration: none;
  &:hover {
    color: green;
    cursor: pointer;
  }
`;

export const Logo = styled.img`
  height: 3rem;
  cursor: pointer;
`;
