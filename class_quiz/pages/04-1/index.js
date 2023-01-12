import axios from "axios";

export default function RestAPIRequestPage() {
  const onClickReq = async () => {
    const result = await axios.get("https://koreanjson.com/users");
    // const result = axios.get("https://koreanjson.com/users");
    console.log(result);
  };

  return (
    <>
      <button onClick={onClickReq}>REST-API 요청하기</button>
    </>
  );
}
