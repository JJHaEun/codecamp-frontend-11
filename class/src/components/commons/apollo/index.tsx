import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  ApolloLink,
  fromPromise,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { useEffect } from "react";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import {
  accessTokenState,
  restoreAccessTokenLoadable,
} from "../../../commons/stores";
import { onError } from "@apollo/client/link/error";
import { getAccessToken } from "../../../commons/libraries/getAccessToken";
const GLOBAL_STATE = new InMemoryCache();

interface IApolloSettingProps {
  children: JSX.Element;
}

export default function ApolloSetting(props: IApolloSettingProps): JSX.Element {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const aaa = useRecoilValueLoadable(restoreAccessTokenLoadable); // api요청등을 글로벌로 하는...(필요한곳에만하는것.)
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
    // 1. refreshToken배우기 이전방식
    // const result = localStorage.getItem("accessToken");
    // setAccessToken(result ?? ""); // 기존방법. 다만 이제는 쿠키로 바뀌었으니 쿠키안에있는 refreshToken가져와야함. 그러나 얘는 secure옵션과 httpOnly설정이 되어있어 document.~~으로 꺼내오지 못함

    // 2. refreshToken 이후 방식 // (refreshToken없애기 => 로그아웃 api요청)
    // 글로벌 스테이트랑 비슷한 방법. 글로벌에 저장하고 뽑는것.요청 받은결과를 필요한곳에서 뽑아사용
    void aaa.toPromise().then((newAccessToken) => {
      setAccessToken(newAccessToken ?? "");
    });
    // void getAccessToken().then((newAccessToken) => {
    //   // 받아온 refreshToken을 다시 넣어줌으로써 새로고침시에도 사라지지않게함.
    //   setAccessToken(newAccessToken ?? "");
    // });
  }, []);

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    // 1. 에러캐치.
    // 그에러가 토큰만료에러면
    if (typeof graphQLErrors !== "undefined") {
      // 에러가 있으면이라는 말
      for (const err of graphQLErrors) {
        if (err.extensions.code === "UNAUTHENTICATED") {
          // 토큰 만료에러라면
          // 2. refresh토큰으로 accessToken재발급받기
          return fromPromise(
            getAccessToken().then((newAccessToken) => {
              // restoreAccessToken을 발급받아와서 accessToken을 교체.
              console.log(newAccessToken);

              setAccessToken(newAccessToken ?? ""); // 기존것말고 다시 재발급받은것을 담아줌., 새로고침시에도 필요!!따라서 이 함수따로빼기
              // 없으면 빈문자열이라도넣기
              // 3. 재발급받은 accessToken으로 방금 실패한 쿼리 정보수정하기

              operation.setContext({
                // 쿠키에 refreshToken을 넣어
                headers: {
                  ...operation.getContext().headers, // 기존의 만료된토큰이 추가되어있는 상태
                  Authorization: `Bearer ${newAccessToken}`, // 토큰만 새것으로 바꿔치기
                },
              }); // 방금실패한 헤더를 변경(accessToken만 변경)
            })
          ).flatMap(
            () => forward(operation) // 실패했던것 (방금 수정한 쿼리)다시 요청하기
          );
        }
      }
    }
  });
  const uploadLink = createUploadLink({
    uri: "https://backend-practice.codebootcamp.co.kr/graphql ",
    // 모든 그래프큐엘api요청시마다 헤더추가
    headers: {
      // Authorization: "Bearer 토큰"
      Authorization: `Bearer ${accessToken}`,
    },
    credentials: "include",
  });

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink]), // 순서가 중요. errorLink가 먼저 나와야함.
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
