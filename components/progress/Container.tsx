
interface Props extends React.ComponentPropsWithoutRef<'div'> {
    isFinished: boolean;
    animationDuration: number
}
const Container = ({ animationDuration, children, isFinished }: Props) => {
    return (
      <div
        style={{
          pointerEvents: "none",
          opacity: isFinished ? 0 : 1,
          transition: `opacity ${animationDuration}ms linear`,
        }}
      >
        {children}
      </div>
    );
  };
  
  export default Container;