import { FoodType } from "../Components/interfaces";
import _ from "lodash";

type Props = {
  rowData: FoodType[];
  ids: number[];
  handleClick: (num: number, checked: boolean) => void;
};

export default function TableRow(props: Props) {
  const { rowData, ids, handleClick } = props;
  const handleChange = (num: number, checked: boolean) => {
    handleClick(num, checked);
  };
  return (
    <>
      {rowData.map((obj) => {
        const checked = _.includes(ids, obj.id);
        return (
          <tr>
            <td>
              {
                <input
                  type="checkbox"
                  value={obj.id}
                  checked={checked}
                  onChange={() => handleChange(obj.id, checked)}
                />
              }
            </td>
            <td>{obj.id}</td>
            <td>{obj.name}</td>
            <td>{obj.description}</td>
            <td>{obj.link}</td>
            <td>{obj.should_cook}</td>
            <td>{obj.nutritions}</td>
            <td>{obj.intake}</td>
          </tr>
        );
      })}
    </>
  );
}
