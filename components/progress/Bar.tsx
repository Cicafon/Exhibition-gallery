import classes from "./Bar.module.css";

interface Props extends React.ComponentPropsWithoutRef<'div'> {
    progress: number
    animationDuration: number
}

const Bar = ({ animationDuration, progress }: Props) => {
  return (
    <div
      className={classes.bar}
      style={{
        marginLeft: `${(-1 + progress) * 100}%`,
        transition: `margin-left ${animationDuration}ms linear`,
      }}
    ></div>
  );
};

export default Bar;
