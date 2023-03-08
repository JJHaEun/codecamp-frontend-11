import { useRouter } from "next/router";

export default function CypressE2ETestPage(): JSX.Element {
  const router = useRouter();

  const onClickMoved = (): void => {
    void router.push("/section33/33-06-cypress-e2e-test-moved");
  };

  return (
    <>
      <button onClick={onClickMoved}>철수랑 놀러가기</button>
    </>
  );
}
