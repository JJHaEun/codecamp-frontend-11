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
        footer: `<button onClick={()=>{
            console.log("안녕");
          }}>처음으로</button>`,
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

  //   function deleteBoard(seq){ // 참고:https://m.blog.naver.com/ka28/222076803325
  //     Swal.fire({
  //       title: '글을 삭제하시겠습니까???',
  //       text: "삭제하시면 다시 복구시킬 수 없습니다.",
  //       icon: 'warning',
  //       showCancelButton: true,
  //       confirmButtonColor: '#3085d6',
  //       cancelButtonColor: '#d33',
  //       confirmButtonText: '삭제',
  //       cancelButtonText: '취소'
  //     }).then((result) => {
  //       if (result.value) {
  //           //"삭제" 버튼을 눌렀을 때 작업할 내용을 이곳에 넣어주면 된다.
  //       }
  //     })
  // }
  const IconFooter = () => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong!",
      footer: '<a href="">Why do I have this issue?</a>',
    });
  };
  return (
    <>
      <button onClick={deleteBoard}>모달열기</button>
      <button onClick={SuccessBt}>보내기</button>
      <button onClick={IconFooter}>보내기2</button>
    </>
  );
}
