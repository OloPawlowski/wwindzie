import {useState} from 'react';

const useInput = (validateValue) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [touched, setTouched] = useState(false);
    const valueIsValid = validateValue(enteredValue);
    const isError = !valueIsValid && touched;
    const valueChangeHandler = (event) => {
        setEnteredValue(event.target.value);
      };
    const inputBlurHandler = (event) => {
        setTouched(true);
      };
      const reset = () => {
          setEnteredValue('');
          setTouched(false);
      }
      return {
          value: enteredValue,
          isValid: valueIsValid,
          isError, 
          valueChangeHandler,
          inputBlurHandler,
          reset
      }
};
export default useInput;