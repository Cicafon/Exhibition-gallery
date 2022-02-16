import React from "react";
import { Exhibition } from "../models";
import classes from "./ExhibitionDetail.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const ExhibitionDetail: React.FC<{ exhibition: Exhibition }> = ({
  exhibition,
}) => {
  const icon = <FontAwesomeIcon icon={faArrowLeft} />;

  return (
    <div>
      <Link href="/">
        <div className={classes.back}>
          {icon}
          {` Back`}
        </div>
      </Link>
      <div className={classes[`title-section`]}>
        <h1>{exhibition.title}</h1>
        {exhibition.aic_start_at && exhibition.aic_end_at && (
          <p className={classes.dates}>{`${new Date(
            exhibition.aic_start_at
          ).toDateString()} - ${new Date(
            exhibition.aic_end_at
          ).toDateString()}`}</p>
        )}
      </div>
      <div className={classes[`picture-description-section`]}>
        <img src={exhibition.picture} />
        <p>{exhibition.description}</p>
      </div>
    </div>
  );
};

export default ExhibitionDetail;
