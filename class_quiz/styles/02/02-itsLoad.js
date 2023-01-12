import styled from "@emotion/styled";

export const MainWrapper = styled.div`
  background-image: url("/itsLoad.png");
  width: 640px;
  padding-top: 228px;
  padding-left: 50px;
  padding-right: 50px;
  padding-bottom: 83px;
`;
export const LocationLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Location = styled.img`
  width: 100px;
  /* height: 100px; */
  object-fit: cover;
  /* position: absolute; */
  position: absolute;
  /* left: 17%;  */
  /* right: 16.76%; */
  /* top: 4%; */
  bottom: 13.92%;
`;

export const Undderbar = styled.img`
  width: 72px;
  height: 24;
`;
export const OnlyLogo = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`;
export const LogoTitle = styled.div`
  font-size: 60px;
  font-weight: 700;
  color: #ffffff;
  padding-bottom: 78px;
  padding-top: 23px;
`;

export const KakaoIcon = styled.img`
  /* position: absolute; */
  width: 32.45px;
  height: 29.97px;
`;
export const CancelIcon = styled.img`
  width: 20px;
  height: 20px;
  position: relative;
  bottom: 33px;
  left: 520px;
  opacity: 0.5;
`;
export const InPutLine = styled.input`
  width: 540px;
  border: none;
  border-bottom: 1px solid #7d7d7d;
  background-color: transparent;
  color: #ffffff;
  font-size: 24px;
  padding-bottom: 7px;
  outline: none;
  margin-top: 66px;
  ::placeholder {
    color: #7d7d7d;
  }
`;
export const Inputs1 = styled.div`
  /* margin-bottom: 20px; */
  position: relative;
  display: flex;
  flex-direction: column;
`;
export const Inputs = styled.div`
  margin-bottom: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
`;
export const ErrMs = styled.span`
  color: #ff1b6d;
  font-size: 16px;
  padding-bottom: 20px;
  position: absolute;
  top: 90%;
`;

export const UndderSign = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const LoginBt = styled.button`
  color: #ffffff;
  font-size: 26px;
  font-weight: 700;
  background-color: rgba(255, 27, 109, 0.4);

  width: 540px;
  height: 76px;
  border: none;
  border-radius: 38px;
  :hover {
    cursor: pointer;
  }
`;
export const KakaoLogin = styled(LoginBt)`
  border: 2px solid #fae100;
  background-color: rgba(255, 255, 255, 0.1);
  color: #fae100;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 29.55px;
`;
export const SearchTitle = styled.div`
  padding-top: 30px;
  color: #ffffff;
  font-size: 20px;
  font-weight: 700;
  display: flex;
  padding-bottom: 50px;
`;
export const SearchName = styled.span`
  padding: 0 33px;
  :hover {
    cursor: pointer;
  }
`;
export const Signup = styled(SearchName)``;
export const PasswordSearch = styled.span`
  padding-left: 33px;
  padding-right: 33px;
  border-left: 2px solid #9f9f9f;
  border-right: 2px solid #9f9f9f;

  :hover {
    cursor: pointer;
  }
`;
