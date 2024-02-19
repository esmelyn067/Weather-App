import { useState } from 'preact/hooks'
import './app.css'
import ClimaActual from './components/ClimaActual';
import Noticias from './components/Noticias';


export function App() {
  const [ciudad, setCiudad] = useState('Santo Domingo');
  const [categoria, setCategoria] = useState('general');
  const [intervalo, setIntervalo] = useState(null);

  const handleSearch = (nuevaCiudad) => {
    setCiudad(nuevaCiudad);
  }

  const handleFilterChange = (nuevaCategoria) => {
    setCategoria(nuevaCategoria);
  };

//Actualizar los datos en intervalo de tiempo
//   useEffect(() => {
//     const fetchClima = async () => {
//       // ...
//     };

//     const fetchNoticias = async () => {
//       // ...
//     };

//     const updateData = async () => {
//       await fetchClima();
//       await fetchNoticias();
//     };

//     setIntervalo(setInterval(updateData, 60000));

//     return () => clearInterval(intervalo);
//   }, [ciudad, categoria]);

//   // ...

// };

  return (
    <>
      <div>
      <h1>Aplicación del clima</h1>
      <ClimaActual ciudad={ciudad} />
      <input type="text" placeholder="Introducir ciudad" onChange={(e) => handleSearch(e.target.value)} />
      <select onChange={(e) => handleFilterChange(e.target.value)}>
        <option value="general">General</option>
        <option value="technology">Tecnología</option>
        <option value="sports">Deportes</option>
        <option value="business">Negocios</option>
      </select>
      <Noticias categoria={categoria}/>
    </div>
    </>
  )
}
