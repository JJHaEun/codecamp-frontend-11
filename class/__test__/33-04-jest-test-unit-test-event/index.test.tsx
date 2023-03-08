import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import JestUnitTestPage from "../../pages/section33/33-04-jest-unit-test-event";

it("버튼을 클릭했을때 제대로 작동하는지 테스트자자", () => {
  render(<JestUnitTestPage />);

  fireEvent.click(screen.getByRole("count-button")); // 나 대신에 클릭해줘
  expect(screen.getByRole("count")).toHaveTextContent("1"); // 기대한다 count라는 것을 가져와서 그 값이 1일 것이라는 것을
});
