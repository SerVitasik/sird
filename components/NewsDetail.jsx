import Image from "next/image";

const NewsDetail = (props) => {

  const formatedDate = `${props.news.date.getDate()}.${props.news.date.getMonth() + 1}.${
    props.news.date.getFullYear()
  }`;

  return <section>
  <h1>{props.news.title}</h1>
  <Image src={props.news.image}
                        alt="News item"
                        width={1300}
                        height={543}
                        />
  <div>{formatedDate}</div>
  <p>{props.news.text}</p>
  </section>;
};

export default NewsDetail;
