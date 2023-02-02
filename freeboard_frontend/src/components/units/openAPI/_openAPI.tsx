/* Javascript 샘플 코드 */
import axios from "axios";
import { useEffect } from "react";

export default function OpenAPI(): JSX.Element {
  useEffect(() => {
    const aaa = async (): Promise<void> => {
      const result = await axios.get(
        `http://apis.data.go.kr/1360000/TourStnInfoService`
      );
      console.log(result);
    };
    void aaa();
  }, []);

  return (
    <>
      <span>그려졌나요?</span>
    </>
  );
}
