import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { isEditState } from "../../../src/commons/stores";
import { useAuth } from "../../../src/components/commons/hooks/customs/useAuth";
import MarketUI from "../../../src/components/units/market/write/createUseditem.market";

export default function MarketWritePage(): JSX.Element {
  const [, setIsEdit] = useRecoilState(isEditState);

  useAuth();
  useEffect(() => {
    setIsEdit(false);
  }, []);
  return (
    <>
      <MarketUI />
    </>
  );
}
