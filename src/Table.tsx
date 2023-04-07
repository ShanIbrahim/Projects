import React, { useState } from "react";
import "./Table.css";
import ButtonComponents from './ButtonComponents';

type Props = {
  data: string[];
};

const Table = ({ data }: Props) => {
  const [selected, setSelected] = useState(false);
  const [items, setItems] = useState([""]);
  const handleClick = (item: string) => {
    setItems([...items, item]);
  };
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>{<input type="checkbox" />}</th>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Link</th>
            <th>Should Cook?</th>
            <th>Nutritions</th>
            <th>Max. Intake per day (in grams)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{<input type="checkbox" />}</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td>{<input type="number" />}</td>
            <td>{<input />}</td>
            <td>{<input />}</td>
            <td>{<input />}</td>
            <td>{<input />}</td>
            <td>
              {
                <div className="select" onClick={() => setSelected(!selected)}>
                  {items}
                  {selected &&
                    data.map((ind: string) => (
                      <div
                        className="vitamins"
                        onClick={() => handleClick(ind)}
                      >
                        {ind}
                      </div>
                    ))}
                </div>
              }
            </td>
            <td>{<input type="number" />}</td>
          </tr>
        </tbody>
      </table>
      <ButtonComponents />
    </>
  );
};

export default Table;
