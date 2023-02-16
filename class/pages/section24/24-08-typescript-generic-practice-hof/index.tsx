import { useRouter } from "next/router";
import { useEffect } from "react";
import type { ReactElement } from "react";

// prettier-ignore
export const withAuth = (컴포넌트: ()=>JSX.Element) => <P extends Record<string, unknown>>(프롭스: P):ReactElement<P> => { // P는 객체 타입임을... 
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("accessToken") === null) {
      // accessToken이 없으면..
      // 없으면 null임.
      alert("로그인 후 이용 가능합니다");
      void router.push(`/section23/23-05-login-check-hoc`);
    }
  }, []);

  return <컴포넌트 {...프롭스} />;
};
