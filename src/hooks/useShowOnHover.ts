import { useState } from 'react';

const useShowOnHover = () => {
  const [isViewSubTab, setIsViewSubTab] = useState(false);

  const handleTabMouseOver = () => {
    setIsViewSubTab(true);
  };

  const handleTabMouseOut = () => {
    setIsViewSubTab(false);
  };

  return {
    isViewSubTab,
    handleTabMouseOver,
    handleTabMouseOut,
  };
};
export default useShowOnHover;
