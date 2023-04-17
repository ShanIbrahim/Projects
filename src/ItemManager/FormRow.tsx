import React, { ChangeEventHandler, useState } from "react";
import Dropdown from "../Components/Dropdown";
import Checkbox from "../Components/Checkbox";
import { FoodType } from "../Components/interfaces";

type Props = {
  rowData: FoodType[];
  setRowData: React.Dispatch<React.SetStateAction<FoodType[]>>;
};

export default function FormRow(props: Props) {
  const { rowData, setRowData } = props;
  const [selectedNutritions, setSelectedNutritions] = useState<string[]>([]);
  const Nutritions = [
    "Vitamin A",
    "Vitamin C",
    "Vitamin D",
    "Vitamin E",
    "Vitamin K",
    "Vitamin B1",
    "Vitamin B2",
    "Vitamin B3",
    "Vitamin B6",
    "Vitamin B12",
  ];
  const [form, setForm] = useState({
    id: 1,
    name: "",
    description: "",
    link: "",
    should_cook: "No",
    nutritions: [""],
    intake: 0,
  });
  const changeHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
    setForm({
      ...form,
      [(event.target as HTMLInputElement).name]: (
        event.target as HTMLInputElement
      ).value,
    });
  };
  function handleKeyPress(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      setRowData([...rowData, form]);
      setForm({
        id: form.id + 1,
        name: "",
        description: "",
        link: "",
        should_cook: "No",
        nutritions: [""],
        intake: 0,
      });
      setSelectedNutritions([]);
    }
  }
  return (
    <tr>
      <td></td>
      <td></td>
      <td>
        {<input name="name" value={form.name} onChange={changeHandler} />}
      </td>
      <td>
        {
          <input
            name="description"
            value={form.description}
            onChange={changeHandler}
          />
        }
      </td>
      <td>
        {<input name="link" value={form.link} onChange={changeHandler} />}
      </td>
      <td>
        {
          <Checkbox
            form={form}
            onClick={(cook: string) => setForm({ ...form, should_cook: cook })}
          />
        }
      </td>
      <td>
        {
          <Dropdown
            options={Nutritions}
            items={selectedNutritions}
            setItems={setSelectedNutritions}
            onSelect={(selectedOptions: string[]) =>
              setForm({ ...form, nutritions: selectedOptions })
            }
          />
        }
      </td>
      <td>
        {
          <input
            type="number"
            name="intake"
            value={form.intake}
            onChange={changeHandler}
            onKeyDown={handleKeyPress}
          />
        }
      </td>
    </tr>
  );
}
