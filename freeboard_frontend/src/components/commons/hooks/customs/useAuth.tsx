import { Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect } from "react";

export const useAuth = (): void => {
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("accessToken") === null) {
      Modal.info({
        content: "로그인 후 이용 가능합니다",
        afterClose() {
          void router.push(`/signIn`);
        },
      });
    }
  }, []);
};
