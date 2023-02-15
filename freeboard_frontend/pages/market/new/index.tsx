import { withAuth } from "../../../src/components/commons/hoc/loginCheck";

function MarketWritePage(): JSX.Element {
  return (
    <>
      <div>마켓작성</div>
    </>
  );
}

export default withAuth(MarketWritePage);
