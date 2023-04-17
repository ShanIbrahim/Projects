import { useState } from "react";
import _ from "lodash";
import "./ItemManager.css";
import TableFooter from "./TableFooter";
import { FoodType } from "../Components/interfaces";
import TableRow from "./TableRow";
import FormRow from "./FormRow";
import TableHead from "./TableHead";

type Props = {
  tableHeads: string[];
};
const ItemManager = (props: Props) => {
  const { tableHeads } = props;
  const [rowData, setRowData] = useState<FoodType[]>([]);
  const [ids, setIds] = useState<number[]>([]);
  const handleClick = (num: number, checked: boolean) => {
    if (checked) {
      setIds(_.filter(ids, (id) => id !== num));
    } else {
      setIds([...ids, num]);
    }
  };
  return (
    <>
      <table>
        <thead>
          <TableHead
            tablehead={tableHeads}
            onChange={(clicked: boolean) =>
              clicked ? setIds(_.map(rowData, "id")) : setIds([])
            }
          />
        </thead>
        <tbody>
          <TableRow
            rowData={rowData}
            ids={ids}
            handleClick={(num: number, checked: boolean) =>
              handleClick(num, checked)
            }
          />
          <FormRow rowData={rowData} setRowData={setRowData} />
        </tbody>
      </table>
      <TableFooter
        data={rowData}
        ids={ids}
        onClick={(newdata: FoodType[], arr: []) => {
          setRowData(newdata);
          setIds(arr);
        }}
      />
    </>
  );
};

export default ItemManager;
