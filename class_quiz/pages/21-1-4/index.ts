import { useState } from "react";

const [state, setState] = useState(0);

setState((prev) => prev + 1); // 매개변수 로 state의 값을 받으니 매개변수이름을 같게 해야작동함
