import type { Address } from "react-daum-postcode";
import type { UseFormSetValue } from "react-hook-form";
import type { IUseCreateForm } from "../../../../units/market/write/createUsedItem.types";
import { useToggleModal } from "./useToggleModal";

interface IUseOnChangeAddress {
  onChangeAddress: (
    setValue: UseFormSetValue<IUseCreateForm>
  ) => (data: Address) => void;
  address?: string;
  zipcode?: string;
}
export const useOnChangeAddress = (): IUseOnChangeAddress => {
  const { ToggleModal } = useToggleModal();
  const onChangeAddress =
    (setValue: UseFormSetValue<IUseCreateForm>) =>
    (data: Address): void => {
      console.log(data);
      setValue("useditemAddress.address", data.address);
      setValue("useditemAddress.zipcode", data.zonecode);
      ToggleModal();
    };
  return {
    // address,
    onChangeAddress,
    // zipcode,
  };
};
