import cn from 'classnames';

interface IInputButtonContainerProps {
  value?: string;
  type?: InputType;
  children: React.ReactNode;
  placeholder?: string;
}

type InputType = 'button';

const InputTypeContainer = (props: IInputButtonContainerProps) => {
  const { value, children, type, placeholder } = props;

  switch (type) {
    case 'button':
      return (
        <div className={cn('button-input-container')}>
          {children}
          {
            <span className="button-input-container__value">
              {value || placeholder}
            </span>
          }
        </div>
      );
    default:
      return children;
  }
};

export default InputTypeContainer;
