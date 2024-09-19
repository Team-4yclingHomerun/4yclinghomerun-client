import { useState, useEffect, useRef } from 'react';

import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

import DropdownItem from './DropdownItem';
import { Button } from '@/components/common/ui/button/button';
import { DropdownItems } from '@/mocks/home/FooterDropdownItemList';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // 드롭다운 요소가 존재하고, 클릭한 요소가 드롭다운 내부에 없다면 드롭다운을 닫음
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative w-full text-sm" ref={dropdownRef}>
      <Button
        onClick={toggleDropdown}
        variant="danger"
        className="flex w-full items-center justify-between rounded-md border border-gray-300 bg-white text-sm text-gray-700 hover:bg-gray-200 focus:outline-none"
      >
        kt 그룹사 및 관련사이트
        <FaChevronDown className="ml-2" />
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="dropdown-scroll absolute z-50 mt-2 h-36 w-full overflow-y-auto rounded-md border border-gray-300 bg-white font-semibold text-gray-500 shadow-lg"
          >
            <ul className="py-1">
              {DropdownItems.map((item, index) => (
                <DropdownItem key={index} to={item.url}>
                  {item.label}
                </DropdownItem>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dropdown;
