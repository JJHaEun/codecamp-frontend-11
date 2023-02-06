import { useEffect, useRef } from "react";

export default function UseRefPage(): JSX.Element {
  const passwordRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    passwordRef.current?.focus();
  }, []);

  return (
    <>
      <p>비밀번호</p>
      <input type="password" ref={passwordRef} />
    </>
  );
}
