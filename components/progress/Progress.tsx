import { useNProgress } from "@tanem/react-nprogress";
import Bar from "./Bar";
import Container from "./Container";

interface Props extends React.ComponentPropsWithoutRef<"div"> {
  isAnimating: boolean;
}

const Progress = ({ isAnimating }: Props) => {
  const { animationDuration, isFinished, progress } = useNProgress({
    isAnimating,
  });
  return (
    <Container animationDuration={animationDuration} isFinished={isFinished}>
      <Bar animationDuration={animationDuration} progress={progress} />
    </Container>
  );
};

export default Progress;
