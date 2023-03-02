import { memo } from "react";
import MarketDetailUI from "../../../src/components/units/market/detail/fetchUsedItem";

function MarketDetailPage(): JSX.Element {
  return (
    <>
      <MarketDetailUI />
    </>
  );
}
export default memo(MarketDetailPage);
