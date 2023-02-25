import type { UseFormSetValue, UseFormTrigger } from "react-hook-form";
import type { IUseCreateForm } from "../../../../units/market/write/createUsedItem.types";

export const useReactQuill = () => {
  const onChangeContents =
    (
      setValue: UseFormSetValue<IUseCreateForm>,
      trigger: UseFormTrigger<IUseCreateForm>
    ) =>
    (value: string) => {
      console.log(value);
      setValue("contents", value === "<p><br></p>" ? "" : value);
      void trigger("contents");
    };
  return {
    onChangeContents,
  };
};
