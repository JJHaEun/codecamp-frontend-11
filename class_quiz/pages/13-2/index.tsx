import { DatePicker } from "antd";
import dayjs from "dayjs";
import { useState } from "react";

const dateFormat = "YYYY-MM-DD"; //picker 부분스타일? 기본값(달 두자리에 월 붙인 형태)
// const dateFormat = "MM월"; //picker 부분스타일? 기본값(달 두자리에 월 붙인 형태)
export default function DatePick() {
  const [data, setData] = useState("");
  // const [value, setValue] = useState("2023-01-01");
  // function onPanelChange(value: any, mode: any) {
  //   console.log(value.format("YYYY/MM/DD"), mode);
  //   setValue(value);
  // }
  const onChangeDate = (value: any) => {
    setData(value.format("YYYY-MM-DD")); // picker아래에 나오는 부분.
    // setData(value.format("MM월")); // picker아래에 나오는 부분.
  };
  console.log(data);
  return (
    <>
      <DatePicker
        defaultValue={dayjs("2023-01-01", dateFormat)} //picker부분에 나오는 부분 숫자부분 기본값
        // defaultValue={dayjs("01", dateFormat)} //picker부분에 나오는 부분 숫자부분 기본값
        format={dateFormat}
        // onPanelChange={onPanelChange}
        onChange={onChangeDate}
        // picker="month" // picker에서 달만뽑음
      />
      <div>{data}</div>
    </>
  );
}
