import LazyLoad from "react-lazyload";

export default function LazyLoadPreLoadPage(): JSX.Element {
  return (
    <>
      <LazyLoad height={200} offset={100}>
        <img src={`/cat1.jpeg`} />
      </LazyLoad>
      <LazyLoad height={200} offset={100}>
        <img src={`/cat2.jpeg`} />
      </LazyLoad>
      <LazyLoad height={200} offset={100}>
        <img src={`/cat3.jpeg`} />
      </LazyLoad>
      <LazyLoad height={200} offset={100}>
        <img src={`/cat4.jpeg`} />
      </LazyLoad>
      <LazyLoad height={200} offset={100}>
        <img src={"/cat5.jpeg"} />
      </LazyLoad>
      <LazyLoad height={200} offset={100}>
        <img src={"/cat6.jpeg"} />
      </LazyLoad>
      <LazyLoad height={200} offset={100}>
        <img src={"/cat7.jpeg"} />
      </LazyLoad>
      <LazyLoad height={200} offset={100}>
        <img src={"/cat8.jpeg"} />
      </LazyLoad>
      <LazyLoad height={200} offset={100}>
        <img src={"/cat9.jpeg"} />
      </LazyLoad>
      <LazyLoad height={200} offset={100}>
        <img src={"/cat10.jpeg"} />
      </LazyLoad>
    </>
  );
}
