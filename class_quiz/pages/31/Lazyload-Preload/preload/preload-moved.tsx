const Cat = [
  `/cat1.jpeg`,
  `/cat2.jpeg`,
  "https://upload.wikimedia.org/wikipedia/commons/9/96/%22Den_kjekke_gutt%22_-_6._Internasjonale_Akademiske_Vinterleker_%281939%29_%2840200856483%29.jpg",
];

export default function PreLoadMoved(): JSX.Element {
  return (
    <>
      {Cat.map((el) => (
        // eslint-disable-next-line react/jsx-key
        <img src={el} />
      ))}
    </>
  );
}
