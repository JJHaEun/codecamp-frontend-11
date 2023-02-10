// presenter 부분

interface IPresenterProps {
  child: string;
  age: number;
}
export default function Presenter(props: IPresenterProps): JSX.Element {
  return (
    <div>
      {props.child}는 {props.age}살 입니다.
    </div>
  );
}
