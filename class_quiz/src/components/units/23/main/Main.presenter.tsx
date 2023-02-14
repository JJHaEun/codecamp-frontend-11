import { IMainUIProps } from "./Main.types";

export default function MainUI(props: IMainUIProps): JSX.Element {
  return <>{props.data?.fetchUserLoggedIn.name}안녕하세요</>;
}
