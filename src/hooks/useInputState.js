import { useState } from 'react';
const useInputState = (defaultValue) => {
      const [ input,setInput ] = useState(defaultValue);
      const handleChange = (event) => {
            setInput(event.target.value);
      }
      const resetInput = () => {
            setInput('');
      }
      return [input,handleChange,resetInput];
}

export { useInputState };