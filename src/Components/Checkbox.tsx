import { FoodType } from "./interfaces";

type Props = {
  form: FoodType;
  onClick: (cook: string) => void;
};
export default function Checkbox(props: Props) {
  const { form, onClick } = props;
  const handleClick = () => {
    onClick("Yes");
  };
  return (
    <div>
      <input
        type="checkbox"
        checked={form.should_cook === "No" ? false : true}
        onChange={handleClick}
      />
    </div>
  );
}
