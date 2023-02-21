import { useState } from "react";
import type { Address } from "react-daum-postcode";
import { useForm } from "react-hook-form";
import { useToggleModal } from "./useToggleModal";

interface IUseOnChangeAddress {
  onChangeAddress: (data: Address) => void;
  address?: string;
  zipcode?: string;
}
export const useOnChangeAddress = (): IUseOnChangeAddress => {
  const { setValue } = useForm({
    mode: "onChange",
  });
  const { ToggleModal } = useToggleModal();
  const onChangeAddress = (data: Address): void => {
    setValue("address", data.address);
    setValue("zipcode", data.zonecode);
    ToggleModal();
  };
  return {
    // address,
    onChangeAddress,
    // zipcode,
  };
};
