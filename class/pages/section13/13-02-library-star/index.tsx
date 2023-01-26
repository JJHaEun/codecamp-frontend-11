import React, { useState } from "react";
import { Rate } from "antd";

// const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

export default function App(): JSX.Element {
  const [value, setValue] = useState(3);

  // 1단계 방식===========
  //   const onChangeStar = (value): void => {
  //     setValue(value);
  //   }; // 원래의 과정

  // 2단계 방식 ======

  //   const onChangeStar = (value) => setValue(value);
  // 화살표 함수에서는 중괄호와 리턴 생략 하고 소괄호로 변경가능.
  // 큭별한것이 들어있지 않으면 소괄호도 생략가능.
  console.log(value);
  return (
    <>
      {/* 1단계 방식 ant-design에서 만든 onChange ==> onChange에 마우수 올려보면 value가 들어오는것을 볼 수 있듬. */}
      {/* <Rate onChange={onChangeStar} value={value} />  여기에서 value는 자신이 감싸고있는 스코프의 value를 의미 */}

      {/*   // 2단계 방식 ====== */}
      {/* <Rate onChange={onChangeStar} value={value} /> */}

      {/* // 3단계 이 자체를 그대로 넣어져도 됨. */}
      {/* <Rate onChange={(value) => setValue(value);} value={value} /> */}

      {/* 4단계 들어온 인자값이 그대로 다믐함수인자로 들어갈때 이때 생략가능. */}
      <Rate onChange={setValue} value={value} />
      {/* <Rate onChange={setValue} value={value} /> */}
      {/* {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''} */}
    </>
  );
}
