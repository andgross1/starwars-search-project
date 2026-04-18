import React, { useContext } from 'react';
import MyContext from '../context/myContext';

function Planets() {
  const { planets, name } = useContext(MyContext);

  function formatNumber(value) {
    if (value === 'unknown') return 'Unknown';

    const num = Number(value);

    const format = (n, suffix) => {
      const formatted = n.toFixed(1);
      return formatted.endsWith('.0')
        ? parseInt(formatted, 10) + suffix
        : formatted + suffix;
    };

    if (num >= 1_000_000_000_000) {
      return format(num / 1_000_000_000_000, ' Trillion'); // Trillion
    }

    if (num >= 1_000_000_000) {
      return format(num / 1_000_000_000, ' Billion'); // Billion
    }

    if (num >= 1_000_000) {
      return format(num / 1_000_000, ' Million'); // Million
    }

    if (num >= 1_000) {
      return format(num / 1_000, ' Thousand'); // Thousand
    }

    return num;
  }

  return (
    <div className="cards-container">
      {planets
        ?.filter((e) => e.name.toUpperCase().includes(name.toUpperCase()))
        .map((e) => (
          <div key={e.name} className="card">
            <h2>{e.name}</h2>

            <p><strong>Population:</strong> {formatNumber(e.population)}</p>
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
