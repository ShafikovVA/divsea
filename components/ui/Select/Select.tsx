import cn from 'classnames';
import './select.scss';
import ReactSelect, { Props as ReactSelectProps } from 'react-select';

interface Props extends ReactSelectProps {
  primary?: boolean;
}

const Select = (props: Props) => {
  return (
    <ReactSelect
      {...props}
      isSearchable={props.isSearchable ?? false}
      unstyled
      classNames={{
        control: ({ isDisabled, isFocused, menuIsOpen }) => {
          return cn('select__control', {
            disabled: isDisabled,
            focused: isFocused,
            open: menuIsOpen,
          });
        },
        container: () => {
          return cn('select__container', {
            'select-primary': props.primary,
          });
        },
        valueContainer: () => {
          return cn('select__value-container');
        },
        singleValue: () => {
          return cn('select__single-value');
        },
        input: () => {
          return cn('select__input');
        },
        placeholder: () => {
          return cn('select__placeholder');
        },
        indicatorSeparator: () => {
          return cn('select__indicator-separator');
        },
        dropdownIndicator: () => {
          return cn('select__dropdown-indicator');
        },
        menu: () => {
          return cn('select__menu');
        },
        menuList: () => {
          return cn('select__menu-list');
        },
        option: ({ isSelected }) => {
          return cn('select__option', {
            selected: isSelected,
          });
        },
      }}
    />
  );
};

export default Select;
