import ChildPage from "./02-child";

export default function ParentPage(): JSX.Element {
  return (
    <>
      {/* <ChildPage count={20} /> */}
      {ChildPage({ count: 50 })}
      {/* 둘다 같음!! */}
    </>
  );
}
