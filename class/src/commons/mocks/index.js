import { setupServer } from "msw/node"; // 세팅.
import { apis } from "./apis";

export const server = setupServer(...apis); // setUpServer로 배열 apis를 요청.
