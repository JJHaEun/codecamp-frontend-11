import { css } from "@emotion/react";

export const globalStyles = css`
  * {
    margin: 0;
    box-sizing: border-box;
    font-size: 10px;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  }
  @font-face {
    font-family: "myfont";
    src: url("/fonts/scifibit.ttf");
  }
`;
