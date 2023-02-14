import { withAuth } from "../../../../src/components/commons/example/hoc/withAuth";
import Main from "../../../../src/components/units/23/main/Main.container";

function MainPage(): JSX.Element {
  return (
    <>
      <Main />
    </>
  );
}

export default withAuth(MainPage);
