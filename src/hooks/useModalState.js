import { useState } from 'react';

const useModalState = (defaultValue) => {
      const [ show,setShow ] = useState(defaultValue);

      const handleClose = () => {
            setShow(false);
      }

      const handleOpen = () => {
            setShow(true);
      }
      return [show,handleOpen,handleClose];
}

export { useModalState };