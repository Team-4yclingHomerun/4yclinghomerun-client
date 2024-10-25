import { useState } from 'react';

const useMouseHover = () => {
  const [isHover, setIsHover] = useState(false);

  const handleMouseOver = () => {
    setIsHover(true);
  };

  const handleMouseOut = () => {
    setIsHover(false);
  };

  return {
    isHover,
    handleMouseOver,
    handleMouseOut,
  };
};
export default useMouseHover;
