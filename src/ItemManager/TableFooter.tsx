import { FoodType } from "../Components/interfaces";
import "./TableFooter.css";
import _ from "lodash";

type Props = {
  data: FoodType[];
  onClick: (newdata: FoodType[], arr: []) => void;
  ids: number[];
};

export default function TableFooter(props: Props) {
  const { data, onClick, ids } = props;
  const detail: any = _.find(data, (obj) => {
    return obj.id === ids[0];
  });

  const handleDelete = () => {
    const newData = _.filter(data, (obj) => {
      return !_.includes(ids, obj.id);
    });
    onClick(newData, []);
  };
  const handleLogs = () => {
    console.log(_.filter(data,(obj) => {
      return _.includes(ids, obj.id);
    }))
  };

  return (
    <div className="tablefooter">
      <button className="detail" disabled={ids.length >= 2}>
        Detail
      </button>
      <button className="action" onClick={handleDelete}>
        Delete
      </button>
      <button className="action" onClick={handleLogs}>
        Logs
      </button>
      {ids.length >= 1 && (
        <div className="detailedobject">
          <div>Id: {detail.id}</div>
          <div>Name: {detail.name}</div>
          <div>Description: {detail.description}</div>
          <div>Link: {detail.link}</div>
          <div>Should Cook: {detail.should_cook}</div>
          <div>Nutritions: {detail.nutritions}</div>
          <div>Max. Intake per day: {detail.intake}</div>
        </div>
      )}
    </div>
  );
}
