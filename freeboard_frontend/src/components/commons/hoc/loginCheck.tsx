import { Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect } from "react";

export const withAuth = (Components: any) => (props: any) => {
  const router = useRouter();
  useEffect(() => {
    if (localStorage.getItem("accessToken") === null) {
      Modal.info({
        content: "로그인을 해주세요",
        afterClose() {
          void router.push(`/signIn`);
        },
      });
    }
  }, []);
  return <Components {...props} />;
};
