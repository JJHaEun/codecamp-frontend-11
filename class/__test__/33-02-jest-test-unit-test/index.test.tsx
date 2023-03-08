import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import JestUnitTestPage from "../../pages/section33/33-02-jest-unit-test";

it("기존 사진이랑 바뀐게 없는지 비교해보자!! - 스냅샷 테스트", () => {
  render(<JestUnitTestPage />); //  가상돔에 그리기

  const myText = screen.getByText("철수는 13살 입니다");
  expect(myText).toBeInTheDocument(); // 돔안에 그려져있는지 기대(그려져 있는지를 봄)
  const myText2 = screen.getByText("철수의 취미 입력하기:");
  expect(myText2).toBeInTheDocument();
  const myText3 = screen.getByText("철수랑 놀러가기");
  expect(myText3).toBeInTheDocument();
});
