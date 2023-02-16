import { withAuth } from "../../../src/components/commons/hoc/loginCheck";
import MarketUI from "../../../src/components/units/market/write/createUseditem.market";

function MarketWritePage(): JSX.Element {
  return (
    <>
      <MarketUI />
    </>
  );
}

export default withAuth(MarketWritePage);
