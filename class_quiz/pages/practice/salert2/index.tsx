import Swal from "sweetalert2";

export default function SweetAlertPage() {
  const deleteBoard = () => {
    try {
      Swal.fire({
        title: "글을 삭제하시겠습니까?",
        text: "삭제하시면 다시 복구시킬 수 없습니다.",
        icon: "warning",
        showCancelButton: true,
        cancelButtonColor: "#3085d6",
        confirmButtonColor: "#d33",
        cancelButtonText: "취소",
        confirmButtonText: "삭제",
        footer: `<button>처음으로</button>`,
      });
    } catch (error) {
      if (error instanceof Error) {
        Swal.fire({
          text: error.message,
          icon: "warning",
          showCancelButton: false,

          confirmButtonColor: "#d33",

          confirmButtonText: "확인",
        });
      }
    }
  };
  const SuccessBt = () => {
    Swal.fire("Good job!", "버튼을 클릭하셨네요!", "success");
  };

  function deleteBoard2() {
    // 참고:https://m.blog.naver.com/ka28/222076803325
    Swal.fire({
      title: "글을 삭제하시겠습니까???",
      text: "삭제하시면 다시 복구시킬 수 없습니다.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "삭제",
      cancelButtonText: "취소",
    }).then((result) => {
      if (result.value) {
        //"삭제" 버튼을 눌렀을 때 작업할 내용을 이곳에 넣어주면 된다.
        Swal.fire("Success Delete!", "성공적으로 삭제되었습니다", "success");
      }
    });
  }
  const IconFooter = () => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong!",
      footer: '<a href="">Why do I have this issue?</a>',
    });
  };
  const InputEmail = async () => {
    const { value: email } = await Swal.fire({
      title: "이메일 입력",
      input: "email",
      inputLabel: "이메일을 입력하세요",
      inputPlaceholder: "Enter your email address",
    });
    if (email) {
      Swal.fire(`당신의 이메일은 :${email}`);
    }
  };
  return (
    <>
      <button onClick={deleteBoard}>deleteBoard열기</button>
      <button onClick={deleteBoard2}>deleteBoard2열기</button>
      <button onClick={SuccessBt}>보내기</button>
      <button onClick={IconFooter}>IconFooter</button>
      <button onClick={InputEmail}>input email</button>
    </>
  );
}
