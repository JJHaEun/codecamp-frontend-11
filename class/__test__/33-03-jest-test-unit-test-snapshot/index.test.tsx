import JestUnitTestPage from "../../pages/section33/33-03-jest-unit-test-snapshot";

import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

it("내가 원하는데로 그려지는지 테스트 하기", () => {
  const result = render(<JestUnitTestPage />); //  가상돔에 그리기
  expect(result.container).toMatchSnapshot(); // 스냅샷이랑 다른게있는지 비교, 없으면 사진을 찍어 만듬.
  // 처음 명령어는 yarn test로 없으면 스냅샷을 찍어둠.. 이후 스냅샷 업데이트 된것으로 찍으려면 yarn test -u
});
