import Router from "next/router";
import { Component } from "react";
// 리엑트 기능들을 상속받아옴!!

export default class CounterPage extends Component {
  // 컴포넌트 => state나, props등  여러 기능이 있어야함.
  // 해당 기능들을 만들어진 class가 있기에 상속받아 사용!!
  state = {
    // state만들기 객체안에 넣음.. 초기값도 함께 적음.set... 없음
    count: 0,
  };
  // 각각의 앞에 this가 생략되었음을 알아두기.(class앞에서는 this가 생략된 형태.따라서 `this.` 해서 사용)

  componentDidMount(): void {
    console.log("그려지고 나서 실행");
  }

  componentDidUpdate(): void {
    console.log("변경되고 나서 실행");
  }

  componentWillUnmount(): void {
    console.log("사라지기전에 실행");

    // ex) 채팅방 사라지기전에 체팅방 나가기 API 요청하고 나감.
  }

  onClickCountUp = (): void => {
    console.log(this.state.count);
    this.setState({
      count: this.state.count + 1, // 카운트 1씩 증가
    });
  };

  onClickMove = (): void => {
    // use ~~ 는 훅 이라는 것으로 함수형 컴포넌트에서만 사용가능
    // 따라서 Router을 import해사용
    void Router.push("/"); // 초기 화면으로
  };

  render(): JSX.Element {
    return (
      //    여기 부분이 화면에 보이는 presenter부분
      <>
        <div>{this.state.count}</div>
        <button onClick={this.onClickCountUp}>카운트 올리기!!</button>
        <button onClick={this.onClickMove}>나가기!!</button>
      </>
    );
  }
}
