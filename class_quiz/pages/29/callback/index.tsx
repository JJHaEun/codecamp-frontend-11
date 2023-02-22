import axios from "axios";
import { useState } from "react";

export default function CallBackPage(): JSX.Element {
  const [list, setList] = useState([]);
  const Callback = (): void => {
    const callback1 = new XMLHttpRequest();
    callback1.open("get", `http://numbersapi.com/random?min=1&max=200`);
    callback1.send();
    callback1.addEventListener("load", (res: any) => {
      const num = String(res.target.response.split(" ")[0]);
      const callback2 = new XMLHttpRequest();
      callback2.open("get", `https://koreanjson.com/posts/${num}`);
      callback2.send();
      callback2.addEventListener("load", (res: any) => {
        const userId = String(JSON.parse(res.target?.response).UserId);
        const callback3 = new XMLHttpRequest();
        callback3.open("get", `https://koreanjson.com/posts?userId=${userId}`);
        callback3.send();
        callback3.addEventListener("load", (res: any) => {
          const result = JSON.parse(res.target.response);
          setList(result);
        });
      });
    });
  };
  const onClickPromise = (): void => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    axios
      .get(`http://numbersapi.com/random?min=1&max=200`)
      // eslint-disable-next-line @typescript-eslint/promise-function-async
      .then((res: any) => {
        const num = String(res.data.split(" ")[0]);
        return axios.get(`https://koreanjson.com/posts/${num}`);
      })
      // eslint-disable-next-line @typescript-eslint/promise-function-async
      .then((res: any) => {
        const userId = String(res.data.UserId);
        return axios.get(`https://koreanjson.com/posts?userId=${userId}`);
      })
      .then((res) => {
        setList(res.data);
      });
  };

  const onClickAsyncAwait = async (): Promise<void> => {
    const num = (
      await axios.get(`http://numbersapi.com/random?min=1&max=200`)
    ).data.split(" ")[0];

    const userId = (
      await axios.get(`https://koreanjson.com/posts/${String(num)}`)
    ).data.UserId;

    const result = await axios.get(
      `https://koreanjson.com/posts?userId=${String(userId)}`
    );
    setList(result.data);
  };
  return (
    <div>
      <div>
        {list.map((el: any, index) => (
          <div key={index}>
            <span>유저: {el.UserId}</span>
            <span>아이디: {el.id}</span>
            <span>제목: {el.title}</span>
          </div>
        ))}
      </div>
      <button onClick={Callback}>Callback</button>
      <button onClick={onClickPromise}>Promise</button>
      <button onClick={onClickAsyncAwait}>Async/Await</button>
    </div>
  );
}
