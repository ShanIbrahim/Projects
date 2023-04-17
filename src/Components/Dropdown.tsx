import { useState } from "react";
import "./Dropdown.css";
import _ from "lodash";

type Props = {
  options: string[];
  onSelect: (selectedOptions: string[]) => void;
  items: string[];
  setItems: React.Dispatch<React.SetStateAction<string[]>>;
};

export default function Dropdown(props: Props) {
  const { options, onSelect, items, setItems } = props;
  const [show, setShow] = useState(false);
  const handleClick = (item: string, checked: boolean) => {
    const newItems = checked
      ? _.filter(items, (ind) => ind !== item)
      : [...items, item];
    setItems(newItems);
    onSelect(newItems);
  };
  return (
    <div
      className="select"
      defaultValue={items}
      onClick={() => setShow(!show)}
    >
      {items}
      {show &&
        options.map((option: string) => {
          const checked = _.includes(items, option);
          return (
            <div className="selectedOptions" key={option}>
              <label>
                <input
                  type="checkbox"
                  value={option}
                  checked={checked}
                  onChange={() => handleClick(option, checked)}
                />
              </label>
              {option}
            </div>
          );
        })}
    </div>
  );
}
