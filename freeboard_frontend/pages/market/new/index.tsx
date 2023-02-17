import { useAuth } from "../../../src/components/commons/hooks/customs/useAuth";
import MarketUI from "../../../src/components/units/market/write/createUseditem.market";

export default function MarketWritePage(): JSX.Element {
  useAuth();
  return (
    <>
      <MarketUI />
    </>
  );
}
