// 개발자일때 - > 디스코드, 카카오톡, 슬랙 등

import axios from "axios";
import { wrapAsync } from "../../../src/commons/libraries/asyncFunc";

export default function OpengraphDeveloperPage(): JSX.Element {
  const onClickEnter = async (): Promise<void> => {
    // 채팅을 입력했을때 해당 주소와 사진을 나오게..
    // 1. 채팅 데이터에 주소가 있는지 찾기(http ~~~)
    // 2. 주소를 요청해(axios로) 받아서 변수에 넣어 꺼내씀(해당 주소로 스크랰핑하기)
    // 3. 메타태그에서 오픈그래프 (og: )찾기
    // 해당 벡엔드서버, 또는 프론트엔드에서 CORS를 열어주지 않으면 사용할 수 없다.
    // 이럴경우에 해당 서버를 우회하는 프록시 서버를 만들어 사용해야한다.
    // 우회하기: 나의 벡엔드를 만들어 우회하기(서버에서 서버는 가능하나) --> 얘가 프록시서버
    // 또는 모바일에서는 무조건 가능하니 모바일로(브라우저만 안되는것 - 브라우저에서 막는것이니)

    const result = await axios.get(
      "http://localhost:3000/section32/32-01-opengraph-provider"
    ); // 프론트엔드에서 처리하는 방법: 웹펙서버(프론트엔드서버)에서 프록시서버 만들기 라는것이 가능. 또는직접벡엔드(node벡엔드)만들어서 처리.
    console.log(result.data);
    console.log(result.data.split("<meta"));
    console.log(
      result.data.split("<meta").filter((el: string) => el.includes("og:")) // <meta를 기준으로 쪼개고. 그 안에서 og: 가 든것만 뽑기
    );
  };

  return (
    <>
      <button onClick={wrapAsync(onClickEnter)}>채팅입력후 엔터치기</button>
    </>
  );
}
