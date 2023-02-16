import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { isEditState } from "../../../../src/commons/stores";
import MarketUI from "../../../../src/components/units/market/write/createUseditem.market";

export default function MarketPage(): JSX.Element {
  const [, setIsEdit] = useRecoilState(isEditState);

  useEffect(() => {
    setIsEdit(true);
  }, []);

  return (
    <>
      <MarketUI />
    </>
  );
}
