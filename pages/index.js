import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout/Layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta charSet="utf-8" />
      </Head>
      <Layout>
        <h2>Тестовая задания от Genesix</h2>
        <p style={{ lineHeight: "2em" }}>
          <b>Тестовое задание next js:</b> <br />
          "Реализовать REST - эндпоинт, который отображал бы данные страниц в
          таком виде <br />
          <b>GET /api/articles/:id</b> <br />
          (где : id - это идентификатор статьи ) сами данные возвращаются в
          таком виде:
          <br />
          <b>
            “title”:”’Title article’, “description”:”Lorem
            ipsum”,“image”:”http://….”{" "}
          </b>
          <br />
          Не важно откуда картинка <br /> Базу данных поднимать не нужно можно
          захардкодить 2 - 3 статьи <br /> Использовать выше написанный бекенд
          сделать на Next.js возможность открывать
          <br />
          <b>/articles</b>
          - список статей <br />
          <b>/article/:id </b> - статью по id <br /> Сайт должен использовать
          серверный рендер добавлять соответствующие мета теги. <br />{" "}
          Визуальный дизайн на Ваш взгляд без использования Bootstrap …. <br />
          Можно сделать простую адаптивность Желательно использовать typescript
        </p>
        <div>
          <h3>Api</h3>
          <div>
            Артиклы JSON
            <Link href={"/api/articles"}>
              <a style={{ color: "blue" }}>
                {" "}
                http://localhost:3000/api/articles
              </a>
            </Link>
          </div>
          <div>
            Один артикл JSON
            <Link href={"/api/article/1"}>
              <a style={{ color: "blue" }}>
                {" "}
                http://localhost:3000/api/article/1"
              </a>
            </Link>
          </div>
        </div>
      </Layout>
    </>
  );
}
