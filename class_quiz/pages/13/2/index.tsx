import { DatePicker } from "antd";
import dayjs from "dayjs";
import { useState } from "react";

const dateFormat = "YYYY/MM/DD";
export default function DatePick() {
  const [dates, setDates] = useState([]);
  return (
    <>
      <DatePicker
        defaultValue={dayjs("2023/01/01", dateFormat)}
        format={dateFormat}
        onChange={(dates: any) => {
          setDates(dates);
          console.log(dates?.M?.$d.dateFormat);
        }}
      />
    </>
  );
}
