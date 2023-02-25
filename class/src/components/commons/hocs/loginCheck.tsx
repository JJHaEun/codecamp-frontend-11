import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilValueLoadable } from "recoil";
// import { getAccessToken } from "../../../commons/libraries/getAccessToken";
import { restoreAccessTokenLoadable } from "../../../commons/stores";

export const withAuth = (컴포넌트: any) => (프롭스: any) => {
  const router = useRouter();
  const aaa = useRecoilValueLoadable(restoreAccessTokenLoadable); // api요청등을 글로벌로 하는...(필요한곳에만하는것.)

  // 1.로그인체크(refreshToken이전)
  // useEffect(() => {
  //   if (localStorage.getItem("accessToken") === null) {
  //     // accessToken이 없으면..
  //     // 없으면 null임.
  //     alert("로그인 후 이용 가능합니다");
  //     void router.push(`/section23/23-05-login-check-hoc`);
  //   }
  // }, []);

  // 2.로그인 체크(refreshToken이후)// _app.tsx에 이어 총 2번요청하게됨.-좋지않은 방법
  // useEffect(() => {
  //   // 리프레쉬토큰 통해 access토큰 반는데 이게 없으면 로그인하라고하기.그런데 이 부분이 app.tsx에도 있고, 권한체크시에도 있음.(여기에도.있음)
  //   // app.tsx에있으면 새로고침때마다 받아옴(토큰유지)긜고, 로그인체크시에도...이렇게되면 api요청두번되는것...
  //   // 이 요청을 글로벌로해보지 => 글로벌 axios
  //   void getAccessToken().then((newAccessToken) => {
  //     // 받아온 refreshToken을 다시 넣어줌으로써 새로고침시에도 사라지지않게함.
  //     if (newAccessToken === undefined) {
  //       alert("로그인 후 이용 가능합니다");
  //       void router.push(`/section23/23-05-login-check-hoc`);
  //     }
  //   });
  // }, []);

  // 3. 로그인체크 좋은방법. 함수를 공유하므로 _app.tsx에 이어 총 한번만 요청이 되어 그 결과만 뽑아옴.
  useEffect(() => {
    void aaa.toPromise().then((newAccessToken) => {
      // 받아온 accessToken유무만 판단하면됨 // 담는건 app.tsx에서 하기에.
      if (newAccessToken === undefined) {
        alert("로그인 후 이용 가능합니다");
        void router.push(`/section23/23-05-login-check-hoc`);
      }
    });
  }, []);
  return <컴포넌트 {...프롭스} />;
};
