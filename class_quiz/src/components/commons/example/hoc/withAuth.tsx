import { Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect } from "react";

export const withAuth = (Components: any) => (props: any) => {
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("accessToken") === null) {
      Modal.info({ content: "로그인이 필요합니다" });
      void router.push(`/23/hoc/login`);
    }
  }, []);
  return <Components {...props} />;
};
