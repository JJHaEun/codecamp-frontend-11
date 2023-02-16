import { useRouter } from "next/router";
interface IUseMovePage {
  onClickMovePage: (path: string) => () => void;
}

export const useMovePage = (): IUseMovePage => {
  const router = useRouter();
  const onClickMovePage = (path: string) => () => {
    void router.push(path);
  };
  return {
    onClickMovePage,
  };
};
