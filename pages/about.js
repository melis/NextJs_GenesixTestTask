import Layout from "../components/Layout/Layout";

const About = () => {
  return (
    <Layout>
      <h2>Это тестовая задания </h2>
      <p>
        Тестовое задание next js: "Реализовать REST - эндпоинт, который
        отображал бы данные страниц в таком виде GET /api/articles/:id (где : id
        - это идентификатор статьи ) сами данные возвращаются в таком виде
        “title”:”’Title article’, “description”:”Lorem ipsum”,
        “image”:”http://….” //Не важно откуда картинка Базу данных поднимать не
        нужно можно захардкодить 2 - 3 статьи Использовать выше написанный
        бекенд сделать на Next.js возможность открывать /articles - список
        статей /articles/:id - статью по id Сайт должен использовать серверный
        рендер добавлять соответствующие мета теги. Визуальный дизайн на Ваш
        взгляд без использования Bootstrap …. Можно сделать простую адаптивность
        Желательно использовать typescript
      </p>
      <div>Надо добавлять лоадеры </div>
      <p>Выполнил: Жолдошев М.</p>
    </Layout>
  );
};
export default About;
