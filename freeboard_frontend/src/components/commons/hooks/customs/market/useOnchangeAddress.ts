import { useState } from "react";
import type { Address } from "react-daum-postcode";
import { useToggleModal } from "./useToggleModal";

interface IUseOnChangeAddress {
  onChangeAddress: (data: Address) => void;
  address?: string;
  zipcode?: string;
}
export const useOnChangeAddress = (): IUseOnChangeAddress => {
  const [address, setAddress] = useState("");
  const [zipcode, setZipcode] = useState("");
  const { ToggleModal } = useToggleModal();
  const onChangeAddress = (data: Address): void => {
    setAddress(data.address);
    setZipcode(data.zonecode);
    ToggleModal();
  };
  return {
    address,
    onChangeAddress,
    zipcode,
  };
};
