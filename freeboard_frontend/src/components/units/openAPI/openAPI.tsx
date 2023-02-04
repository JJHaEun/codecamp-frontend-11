/* Javascript 샘플 코드 */
import axios from "axios";
import { useEffect, useState } from "react";
import * as S from "./openAPI.styles";
export default function OpenAPI(): JSX.Element {
  const [today, setToday] = useState("");
  const [todayW, setTodayW] = useState("");
  const [conditionIcon, setConditionIcon] = useState("");
  const [forecastIcon, setForecastIcon] = useState([]);
  useEffect(() => {
    const options = {
      method: "GET",
      // url: "https://weatherapi-com.p.rapidapi.com/current.json",
      url: "https://weatherapi-com.p.rapidapi.com/forecast.json",
      // params: { q: "South Korea" },// 오늘날씨만 받아오기
      params: { q: "South Korea", days: "3" },
      headers: {
        "X-RapidAPI-Key": "bcaa27cb8amsha0c78dedd13b245p1e6b34jsn749e0be3decd",
        "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data.forecast.forecastday[0].day.condition.text);
        setForecastIcon(response.data.forecast.forecastday); // 앞으로 날씨(3일치)
        // response.data.forecastday.map((el)=>(
        //   el.day.condition.icon
        // ))
        // console.log(response.data);
        setTodayW(response.data.current.condition.text); // 오늘의 날씨 영어
        setConditionIcon(response.data.current.condition.icon); // 오늘의 날씨 아이콘
        setToday(response.data.location.localtime.slice(0, 10)); // 날짜
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <>
      <S.TodayWeatherWrap>
        <S.WeatherTitle>오늘의 날씨</S.WeatherTitle>
        <S.WeatherImg src={conditionIcon} />
        <div>
          <S.WhatWeather>{todayW}</S.WhatWeather>
          <span>{today}</span>
        </div>
        {forecastIcon.map((el: any) => (
          // 앞으로의 날씨 3일
          <img src={el.day.condition.icon} key={el} />
        ))}
      </S.TodayWeatherWrap>
    </>
  );
}
