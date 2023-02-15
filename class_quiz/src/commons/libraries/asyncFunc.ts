import { FormEvent } from "react";

export const wrapAsync = (asyncFunc: () => Promise<void>) => () => {
  void asyncFunc();
};

export const wrapFormAsync =
  (asyncFunc: () => Promise<void>) => (event: FormEvent<HTMLFormElement>) => {
    event?.preventDefault(); // 기본적으로 수행되는것을 막아라 // form 의 경우 onSubmit이 실행되면 그 주소로 넘어가 페이지 새로고침이 일어나는데, 그것을 막기위해 사용
    void asyncFunc();
  };
