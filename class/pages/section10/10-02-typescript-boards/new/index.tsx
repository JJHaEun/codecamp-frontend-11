import BoardWrite from "../../../../src/components/units/board/10-write/BoardWrite.container";

export default function GraphqlMutationPage() {
  return (
    <div>
      <div>########## 여기는 페이지 입니다 ##############</div>
      <BoardWrite isEdit={false} />
      {/* isEdit는 props라는 객체안에 들어가는것. isEdit라는 키로.. */}
      <div>########## 여기는 페이지 입니다 ##############</div>
    </div>
  );
}
