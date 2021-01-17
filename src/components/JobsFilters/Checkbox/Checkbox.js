import { useContext } from 'react';
import { FiltersContext } from '../JobsFilters';
import {Wrapper, HiddenCheckbox, StyledCheckbox, Text} from './Checkbox.css'

const Checkbox = ({ className, children, ...props }) => {
  const { fullTime, handleFullTimeChange } = useContext(FiltersContext);

  return (
    <Wrapper className={className}>
      <HiddenCheckbox
        checked={fullTime}
        {...props}
        onChange={handleFullTimeChange}
      />
      <StyledCheckbox checked={fullTime} />
      <Text>{children}</Text>
    </Wrapper>
  );
};

export default Checkbox;
