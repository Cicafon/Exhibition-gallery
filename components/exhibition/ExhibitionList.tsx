import { Exhibition } from "../models";
import classes from "./ExhibitionList.module.css";
import ExhibitionListItem from "./ExhibitionListItem";

const ExhibitionList: React.FC<{ exhibitions: Exhibition[] }> = ({
  exhibitions,
}) => {
  return (
    <ul className={classes.list}>
      {(!exhibitions || exhibitions.length === 0) && (
        <p>No available exhibitions</p>
      )}
      {exhibitions &&
        exhibitions.length > 0 &&
        exhibitions?.map((exhibition, index) => (
          <ExhibitionListItem key={index} exhibition={exhibition} />
        ))}
    </ul>
  );
};

export default ExhibitionList;
