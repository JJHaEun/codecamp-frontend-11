import { useEffect, useRef } from "react";
import type { RefObject } from "react";

interface IUseRefHooks {
  inputRef: RefObject<HTMLInputElement>;
}

export const useRefHooks = (): IUseRefHooks => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return {
    inputRef,
  };
};
