import { useState } from "react";

const dataList = [
  { id: 1, data: "9월달 시스템 점검 안내입니다.", date: "2020.09.19" },
  { id: 2, data: "안녕하세요! 공지사항 전달드립니다.", date: "2020.09.17" },
  { id: 3, data: "개인정보 처리방침 변경 사전 안내", date: "2020.09.12" },
  { id: 4, data: "ios 10.0이하 지원 중단 안내", date: "2020.08.10" },
  { id: 5, data: "이용약관 변경 사전 안내", date: "2020.08.01" },
  { id: 6, data: "개인정보 처리방침 변경 사전 안내", date: "2020.07.19" },
];

export default function QuizPractice() {
  const [check, setCheck] = useState([]);

  const onClickCheckAll = () => {
    if (check.length !== dataList.length) {
      setCheck(dataList);
    } else {
      setCheck([]);
    }
  };

  const onChecked = (list) => {
    console.log(list);
    if (check.every((cur) => cur.id !== list.id)) {
      setCheck([...check, list]);
    } else {
      const result = check.filter((cur) => cur.id !== list.id);
      console.log(result);
      setCheck(result);
    }
  };
  const isChecked = (list) => {
    // console.log(list);
    return check.some((cur) => cur.id === list.id);
  };
  return (
    <div>
      <table>
        <tr>
          <th>
            <input
              type="checkbox"
              onChange={onClickCheckAll}
              checked={check.length === dataList.length}
            />
          </th>
          <th>번호</th>
          <th>제목</th>
          <th>작성일</th>
        </tr>
        {dataList.map((list, index) => (
          <tr key={index}>
            <td>
              <input
                type="checkbox"
                onChange={() => onChecked(list)}
                checked={isChecked(list)}
              />
            </td>
            <td>{list.id}</td>
            <td>{list.data}</td>
            <td>{list.date}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
