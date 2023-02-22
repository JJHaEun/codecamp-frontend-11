import { useRecoilState } from "recoil";
import { isOpenState } from "../../../../../commons/stores";

interface IUseToggleModal {
  ToggleModal: () => void;
}

export const useToggleModal = (): IUseToggleModal => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [, setIsOpen] = useRecoilState(isOpenState);

  const ToggleModal = (): void => {
    setIsOpen((prev) => !prev);
  };
  return {
    ToggleModal,
  };
};
