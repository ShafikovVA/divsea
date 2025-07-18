import cn from 'classnames';
import './inputs-container.scss';

interface SolderedInputContainerProps {
  children?: React.ReactNode;
  soldered?: boolean;
}

const InputsContainer = ({
  children,
  soldered,
}: SolderedInputContainerProps) => {
  return <div className={cn('inputs-container', { soldered })}>{children}</div>;
};

export default InputsContainer;
