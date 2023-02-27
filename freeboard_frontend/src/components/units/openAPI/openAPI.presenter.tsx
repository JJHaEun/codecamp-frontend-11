import { Fragment } from "react";
import * as S from "./openAPI.styles";
import type { IOpenAPIUIProps } from "./openAPI.types";
export default function OpenAPIUI(props: IOpenAPIUIProps): JSX.Element {
  return (
    <>
      <S.WeatherWrap>
        <S.WeatherTitle>집에있기 좋은 날</S.WeatherTitle>
        <S.DaysWrap>
          <S.Today>
            <S.WhatWeather>{props.todayW}</S.WhatWeather>
            <S.Day>{props.today}</S.Day>
            <S.WeatherImg src={props.conditionIcon} />
            <S.TodayTemEx>
              현재온도: <S.TodayTemp>{props.currentTemp}</S.TodayTemp> ℃
            </S.TodayTemEx>
            <S.Ex>약간의 오차가 있을 수 있습니다</S.Ex>
          </S.Today>
          <S.ThreeDays>
            {props.forecastIcon.map((el: any) => (
              // 앞으로의 날씨 3일
              <div key={el.date}>
                <img src={el.day.condition.icon} />
                <S.Day>{el.date}</S.Day>
              </div>
            ))}
          </S.ThreeDays>
        </S.DaysWrap>
      </S.WeatherWrap>
    </>
  );
}
