import axios from "axios";
import Layout from "../components/Layout/Layout";
import Article, { ArticleType } from "../components/Article/Article";
import style from "./articlesBox.module.scss";
import { NextPage } from "next";

type PropsType = {
  articles: ArticleType[];
};
const Articles: NextPage<PropsType> = ({ articles }) => {
  return (
    <Layout>
      <h2>Articless {articles.length}</h2>
      <div className={style.articlesBox}>
        {articles.map((el) => (
          <Article el={el} key={el.id} />
        ))}
      </div>
    </Layout>
  );
};
export default Articles;

Articles.getInitialProps = async () => {
  const res = await axios.get("http://localhost:3000/api/articles");
  return { articles: res.data.articles };
};