import styled from "styled-components";

export const Container = styled.main`
  height: 75vh;
  display: flex;
  align-items: center;
  background-size: cover;
  justify-content: center;
  filter: brightness(0.8);
  background-repeat: no-repeat;
  background-image: url("https://images.pexels.com/photos/1250260/pexels-photo-1250260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
`;

export const ContentContainer = styled.div`
  color: #fff;
  
  span {
    display: flex;
    font-size: 8rem;
    align-items: center;
    flex-direction: column;
    text-transform: uppercase;
  }

  #saveOur {
    font-weight: lighter;
  }

  #world {
      margin: 0;
      font-size: 11rem;
    }
`;
