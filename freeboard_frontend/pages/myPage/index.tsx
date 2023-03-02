import { useAuth } from "../../src/components/commons/hooks/customs/useAuth";
import MyPageMain from "../../src/components/units/mypage/point/main/point";
export default function MayPage(): JSX.Element {
  useAuth();

  return (
    <>
      <MyPageMain />
    </>
  );
}
