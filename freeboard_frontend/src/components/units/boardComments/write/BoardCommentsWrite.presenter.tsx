export default function BoardCommentsUI(props) {
  return (
    <div>
      <span>댓글</span>
      <div>
        <input
          type="text"
          placeholder="작성자"
          onChange={props.onChangeCommentWriter}
        />
        <input
          type="password"
          placeholder="비밀번호"
          onChange={props.onChangeCommentPassword}
        />
      </div>
      <div>별점들어가는 곳.</div>
      <div>
        <textarea
          maxLength={100}
          placeholder="댓글을 작성해주세요"
          onChange={props.onChangeCommentContents}
        />
        <button onClick={props.onClickCreateBoardComment}>댓글작성</button>
      </div>
    </div>
  );
}
