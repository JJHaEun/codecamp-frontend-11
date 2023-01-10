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
  width: 66px;
  height: 82px;
  position: absolute;
  top: 165px;
`;

export const Undderbar = styled.img`
  width: 72px;
  height: 24;
  position: relative;
`;
export const LogoTitle = styled.div`
  font-size: 60px;
  font-weight: 700;
  color: #ffffff;
  padding-bottom: 144px;
  padding-top: 23px;
`;

export const KakaoIcon = styled.img`
  width: 32px;
  height: 29px;
`;
export const CancelIcon = styled.img`
  width: 20px;
  height: 20px;
  position: relative;
  bottom: 40px;
  left: 500px;
`;
export const InPutLine = styled.input`
  width: 540px;
  border: none;
  border-bottom: 1px solid #7d7d7d;
  background-color: transparent;
  color: #ffffff;
  font-size: 24px;
  padding-bottom: 10px;
`;

export const ErrMs = styled.div`
  color: #ff1b6d;
  font-size: 16px;
  padding-top: 10px;
  padding-bottom: 25px;
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
`;
export const KakaoLogin = styled(LoginBt)`
  border: 2px solid #fae100;
  background-color: rgba(255, 255, 255, 0.1);
  color: #fae100;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
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
`;

export const PasswordSearch = styled.span`
  padding-left: 33px;
  padding-right: 33px;
  border-left: 2px solid #9f9f9f;
  border-right: 2px solid #9f9f9f;
`;
