import { useState } from 'react';

const useDropDowns = () => {
  const [open, setOpen] = useState(false);

  const handleCollapseToggle = () => {
    setOpen(!open);
  };

  return {
    open,
    handleCollapseToggle,
  };
};

export default useDropDowns;
