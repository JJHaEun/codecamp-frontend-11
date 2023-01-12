import axios from "axios";
import 나만의페이지 from "../../section01/01-01-example";

export default function RestGetPage() {
  function onClickAsync() {
    const result = axios.get("https://koreanjson.com/posts/1");
    console.log(result); // Promise
  } // 기다리지 않고 result에 넣기 ==> 그러면 result 에는 Promise가 들어감

  //   async function onClickSync() {
  //     const result = await axios.get("https://koreanjson.com/posts/1"); // 가지고올때까지 기다림  => 함수 중복 선언 문제 있음.
  //     console.log(result.data.title); // 제대로된 결과 받아옴  => { title : "...." , ... }
  //   }

  const onClickSync = async () => {
    const result = await axios.get("https://koreanjson.com/posts/1"); // 가지고올때까지 기다림
    console.log(result.data.content); // 제대로된 결과 받아옴  => { title : "...." , ... }
    console.log(result.data.title);
  };

  return (
    <div>
      <button onClick={onClickAsync}>REST_API(비동기) 요청하기</button>
      <button onClick={onClickSync}>REST_API(동기) 요청하기</button>
      <나만의페이지 />
    </div>
  );
}
