import './slider-buttons.scss';

interface ISliderButtons {
  onClickNext?: () => void;
  onClickPrev?: () => void;
  isNextActive?: boolean;
  isPrevActive?: boolean;
  prevButtonClassName?: string;
  nextButtonClassName?: string;
  cssMode?: boolean;
}

const SliderButtons = (props: ISliderButtons) => {
  const {
    onClickNext,
    onClickPrev,
    isNextActive,
    isPrevActive,
    prevButtonClassName,
    nextButtonClassName,
    cssMode,
  } = props;

  return (
    <div className="slider__buttons">
      <div
        role="button"
        tabIndex={0}
        className={`button-left ${prevButtonClassName} ${!cssMode && !isPrevActive && 'disabled'}`}
        onClick={onClickPrev}
        onKeyPress={() => null}
      >
        <svg
          width="27"
          height="27"
          viewBox="0 0 27 27"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.2397 8.39036C10.8023 7.98657 10.1203 8.01384 9.71654 8.45128L6.23402 12.224C5.85287 12.6369 5.85287 13.2733 6.23401 13.6862L9.71653 17.459C10.1203 17.8965 10.8023 17.9237 11.2397 17.5199C11.6772 17.1161 11.7045 16.4342 11.3007 15.9967L9.48802 14.033L19.9611 14.033C20.5565 14.033 21.0391 13.5504 21.0391 12.9551C21.0391 12.3598 20.5565 11.8772 19.9611 11.8772L9.48805 11.8772L11.3007 9.91356C11.7044 9.47612 11.6772 8.79416 11.2397 8.39036Z"
            fill="inherit"
          />
        </svg>
      </div>
      <div className="slider__buttons-border"></div>
      <div
        role="button"
        tabIndex={0}
        className={`button-right ${nextButtonClassName} ${!cssMode && !isNextActive && 'disabled'}`}
        onClick={onClickNext}
        onKeyPress={() => null}
      >
        <svg
          width="27"
          height="27"
          viewBox="0 0 27 27"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.7603 8.39036C16.1977 7.98657 16.8797 8.01384 17.2835 8.45128L20.766 12.224C21.1471 12.6369 21.1471 13.2733 20.766 13.6862L17.2835 17.459C16.8797 17.8965 16.1977 17.9237 15.7603 17.5199C15.3228 17.1161 15.2955 16.4342 15.6993 15.9967L17.512 14.033L7.03886 14.033C6.44354 14.033 5.96094 13.5504 5.96094 12.9551C5.96094 12.3598 6.44354 11.8772 7.03886 11.8772L17.5119 11.8772L15.6993 9.91356C15.2956 9.47612 15.3228 8.79416 15.7603 8.39036Z"
            fill="inherit"
          />
        </svg>
      </div>
    </div>
  );
};

export default SliderButtons;
