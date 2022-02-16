import classes from "./ExhibitionListItem.module.css";
import { Exhibition } from "../models";
import { useRouter } from "next/router";

const ExhibitionListItem: React.FC<{ exhibition: Exhibition }> = ({
  exhibition,
}) => {
  const router = useRouter();
  const showDetails = () => {
    router.push("/exhibition/" + exhibition.id);
  };

  return (
    <div className={classes.item} onClick={showDetails}>
      <img src={exhibition.picture!} alt={exhibition.title} />
      <div>
        <p className={classes.title}>{exhibition.title}</p>
        {exhibition.aic_start_at && exhibition.aic_end_at && (
          <p className={classes.dates}>{`${new Date(
            exhibition.aic_start_at
          ).toDateString()} - ${new Date(
            exhibition.aic_end_at
          ).toDateString()}`}</p>
        )}
      </div>
    </div>
  );
};

export default ExhibitionListItem;
