import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  ApolloLink,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/stores";

const GLOBAL_STATE = new InMemoryCache();

interface IApolloSettingProps {
  children: JSX.Element;
}

export default function ApolloSetting(props: IApolloSettingProps): JSX.Element {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  // 1. 프리랜더링 예제 - process.browser방법
  // if (process.browser) {
  //   alert("방가 . 지금은 브라우저~");
  //   console.log("지금은 브라우저");
  //   const result = localStorage.getItem("accessToken");
  //   console.log(result);
  //   setAccessToken(result ?? ""); // result가 없으면 어쩔껀데? 없으면 빈문자열로!!
  //   // => 일단 로컬스토리지에 저장되는것은 객체여도 문자열로 저장됨
  //   // 일단 accessToken을 로그인시 받으면 그것을 활용하고 로컬스토리지에 저장함,
  //   // 새로고침시 사라지는데 이때는 로컬스토리지의것을 꺼내 accessToken에 담고 그것을 다시 보내주어 받은 토큰이 사라지지않게함
  // } else {
  //   console.log("지금은 프론트엔드 서버다!!");
  // }

  // 2. 프리랜더링 예제 -typeof window방법
  // if(typeof window !=="undefined"){
  //   console.log("지금은 브라우저");
  // }else{
  //   console.log("지금은 프론트엔드 서버다!!");// 즉 yarn dev로 실행한 부분
  // }

  // 3. 프리랜더링 무시 -useEffect방법  --> 가장깔끔
  useEffect(() => {
    // console.log("지금은 브라우저");
    const result = localStorage.getItem("accessToken");
    setAccessToken(result ?? "");
  }, []);

  const uploadLink = createUploadLink({
    uri: "http://backend-practice.codebootcamp.co.kr/graphql ",
    // 모든 그래프큐엘api요청시마다 헤더추가
    headers: {
      // Authorization: "Bearer 토큰"
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    cache: GLOBAL_STATE, // 컴퓨터의 메모리에  벡엔드에서 받아온 데이터 임시로 저장해놓기 => 니중에 더 자세히 알아보기
  });

  // prettier-ignore
  return (
    <>
      <ApolloProvider client={client}> 
        {props.children}
      </ApolloProvider>
    </>
  );
}
