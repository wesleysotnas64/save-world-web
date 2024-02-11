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
  height: 32rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 30px;

  h2{
    margin: 10px;
  }
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
    border-radius: 0px 100px 100px 100px;
    
    img {
      width: 100%;
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
  border-radius: 100px 0px 100px 100px;

  img {
    width: 100%;
  }

  p{
    width: 90%;
    margin-bottom: 40px;
    font-weight: lighter;
  }
`;