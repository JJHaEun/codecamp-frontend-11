import { useQuery } from "@apollo/client";
import { IQuery } from "../../../../commons/types/generated/types";
import MainUI from "./Main.presenter";
import { FETCH_USER_LOGGEDIN } from "./Main.query";

export default function Main(): JSX.Element {
  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGEDIN);

  return (
    <>
      <MainUI data={data} />
    </>
  );
}
