import _ from "lodash";
import { useState } from "react";

type Props = {
  tablehead: string[];
  onChange: (clicked: boolean) => void;
};

export default function TableHead(props: Props) {
  const { tablehead, onChange } = props;
  const [clicked, setClicked] = useState(false)
  const handleChange = () => {
    const click = clicked ? false : true
    setClicked(click)
    onChange(click)
  }
  return (
    <tr>
      <th>{<input type="checkbox" onChange={handleChange} />}</th>
      {_.map(tablehead, (ind) => (
        <th key={ind}>{ind}</th>
      ))}
    </tr>
  );
}
