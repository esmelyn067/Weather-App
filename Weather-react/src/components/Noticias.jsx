import React, { useState, useEffect } from 'react';

const Noticias = ({ categoria }) => {
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    const fetchNoticias = async () => {
      const API_KEY = '971ce207f0254563839c3d9dd94de572';
      const url = `https://newsapi.org/v2/top-headlines?category=${categoria}&apiKey=${API_KEY}`;
      const response = await fetch(url);
      const data = await response.json();
      setNoticias(data.articles);
    };

    fetchNoticias();
  }, [categoria]);

  if (!noticias.length) {
    return <div>Cargando...</div>;
  }

  const noticiasEnEspanol = noticias.filter(noticia => noticia.language === 'es');
  const noticiasEnIngles = noticias.filter(noticia => noticia.language === 'en');
  

  return (
    <div>
      <h2>Noticias - {categoria}</h2>
      <ul>
        {noticiasEnEspanol.map((noticia) => (
          <li key={noticia.title}>
            <h3>{noticia.title}</h3>
            <p>{noticia.description}</p>
            <a href={noticia.url} target="_blank">Leer más...</a>
          </li>
        ))}
         {noticiasEnIngles.map((noticia) => (
        <li key={noticia.title}>
          <h3>{noticia.title}</h3>
          <p>{noticia.description}</p>
          <a href={noticia.url} target="_blank">Read more...</a>
        </li>
      ))}
      </ul>
    </div>
  );
};

export default Noticias;
