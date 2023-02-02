import axios from "axios";
import { useEffect, useState } from "react";

export default function OpenAPITestPage(): JSX.Element {
  const [dogImg, setDogImg] = useState("");
  useEffect(() => {
    const RandomImg = async (): Promise<void> => {
      const result = await axios.get("https://dog.ceo/api/breeds/image/random");

      setDogImg(result.data.message);
    };
    void RandomImg();
  }, []);
  return (
    <>
      <img src={dogImg} />
    </>
  );
}
