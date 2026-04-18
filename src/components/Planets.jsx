import React, { useContext } from 'react';
import MyContext from '../context/myContext';

function Planets() {
  const { planets, name } = useContext(MyContext);

  return (
    <div className="cards-container">
      {planets
        ?.filter((e) => e.name.toUpperCase().includes(name.toUpperCase()))
        .map((e) => (
          <div key={e.name} className="card">
            <h2>{e.name}</h2>

            <p><strong>Population:</strong> {e.population}</p>
            <p><strong>Climate:</strong> {e.climate}</p>
            <p><strong>Terrain:</strong> {e.terrain}</p>
            <p><strong>Diameter:</strong> {e.diameter}</p>
            <p><strong>Gravity:</strong> {e.gravity}</p>
          </div>
        ))}
    </div>
  );
}

export default Planets;
