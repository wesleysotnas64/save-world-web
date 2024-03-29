import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  height: 15vh;
  display: flex;
  padding: 0.5rem 0;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  background: #3a7bfc;
`;

export const ContainerLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 20%;
  height: 50%;
`;

export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;

  width: 80%;
  height: 100%;
`;

export const ContainerInfoTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 40%;
`;

export const ContainerInfoDevelopers = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 60%;

  a {
    text-decoration: none;
    color: inherit;
    margin: 0px 10px;
    transition: 0.2s;
    &:hover {
      color: #ddd;
    }
  }
`;

export const Logo = styled.img`
  width: 30%;
`;
