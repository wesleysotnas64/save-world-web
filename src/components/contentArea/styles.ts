import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ContentAreaBlock = styled.div`
  width: 100%;
  height: 30rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 30px;

  
`;

export const LeftRigthInfoBlock = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    height: 50vh;
    `;

export const LeftInfoBlock = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    border-radius: 0px 150px 150px 150px;
    
    img {
      width: 100%;
    }

    h2{
      margin: 10px;
      color: rgb(0,100,0);
    }

    p{
    width: 90%;
    margin-bottom: 40px;
    font-weight: lighter;
    text-align: right;
  }
`;

export const RightInfoBlock = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 150px 0px 150px 150px;

  img {
    width: 100%;
  }

  h2{
      margin: 10px;
      color: rgb(0,100,0);
    }

  p{
    width: 90%;
    margin-bottom: 40px;
    font-weight: lighter;
  }
`;