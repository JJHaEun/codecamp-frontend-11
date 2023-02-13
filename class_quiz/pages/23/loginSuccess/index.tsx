import { gql, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { isAccessToken } from "../../../src/commons/stores";
import { IQuery } from "../../../src/commons/types/generated/types";

const FETCH_USER_LOGGEDIN = gql`
  query {
    fetchUserLoggedIn {
      _id
      name
    }
  }
`;

export default function LoginSuccessPage(): JSX.Element {
  const router = useRouter();
  const [accessToken] = useRecoilState(isAccessToken);

  useEffect(() => {
    if (accessToken === "") {
      Modal.info({
        content: "로그인을 먼저 해주세요",
        afterClose() {
          void router.push(`/23/login`);
        },
      });
    }
  }, []);

  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGEDIN);
  return <>{data?.fetchUserLoggedIn.name} 로그인을 환영합니다</>;
}
