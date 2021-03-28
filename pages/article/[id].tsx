import Layout from "../../components/Layout/Layout";
import axios from "axios";
import { NextPage } from "next";
import { ArticleType } from "../../components/Article/Article";
type PropsType = {
  article: ArticleType;
};
const Article: NextPage<PropsType> = ({ article }) => {
  if (typeof article != "object") {
    return <Layout>{article}</Layout>;
  }
  return (
    <Layout>
      <h2>{article.title}</h2>
      <img src={article.image} />
      <p>{article.description}</p>
    </Layout>
  );
};
export default Article;

Article.getInitialProps = async ({ query }) => {
  const { data } = await axios.get(
    `http://localhost:3000/api/article/${query.id}`
  );
  return { article: data.article };
};