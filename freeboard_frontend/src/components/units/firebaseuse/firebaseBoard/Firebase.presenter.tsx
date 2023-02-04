import type { IFirebaseWriteUIProps } from "./Firebase.types";

export default function FirebaseWriteUI(
  props: IFirebaseWriteUIProps
): JSX.Element {
  return (
    <div>
      <div>당신의 하루는 어떠셨나요?</div>
      <label>작성자</label>
      <input
        type="text"
        placeholder="작성자"
        id="writer"
        onChange={props.onChangeContent}
      />
      <label>제목</label>
      <input
        type="text"
        placeholder="제목"
        id="title"
        onChange={props.onChangeContent}
      />
      <label>내용</label>
      <input
        type="text"
        placeholder="내용"
        id="contents"
        onChange={props.onChangeContent}
      />
      <button onClick={props.onClickSubmit}>등록하기</button>
      {/* <article>
            <header>
            <h1><input/></h1>
        </header>
            </article> */}
    </div>
  );
}
