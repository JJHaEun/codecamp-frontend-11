import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function UseEffectPage(): JSX.Element {
  const [isChange, setIsChange] = useState(false);
  const router = useRouter();

  const onClickChange = (): void => {
    setIsChange(true);
  };
  console.log(isChange);
  const onClickMove = (): void => {
    void router.push(`/`);
  };

  useEffect(() => {
    alert("Rendered!");
  }, []);

  useEffect(() => {
    alert("Changed!");
  }, [onClickChange]);

  useEffect(() => {
    return () => {
      alert("Bye!!");
    };
  }, []);

  return (
    <>
      <button onClick={onClickChange}>변경</button>
      <button onClick={onClickMove}>이동</button>
    </>
  );
}
