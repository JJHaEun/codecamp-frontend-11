import axios from "axios";
import { useEffect, useState } from "react";

export default function RestGetPage(): JSX.Element {
  const [dog, setDog] = useState("");

  useEffect(() => {
    const onClickSync = async (): Promise<void> => {
      // 여기 안에서 async / await사용하기위해 함수로 묶어줌
      const result = await axios.get("https://dog.ceo/api/breeds/image/random"); // 가지고올때까지 기다림
      console.log(result.data.message); // 사진 주소 // 이 주소로부터 다운받아옴
      setDog(result.data.message);
    };
    void onClickSync();
  }, []);

  return (
    <div>
      <img src={dog} />
      {/* 이미지 주소를 넣어주는것 */}
    </div>
  );
}
