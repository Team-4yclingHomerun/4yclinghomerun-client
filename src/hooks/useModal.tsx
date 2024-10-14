import React, { ReactNode, useRef, useState } from 'react';

import { motion, AnimatePresence } from 'framer-motion';
import ReactDOM from 'react-dom';
import { IoCloseSharp } from 'react-icons/io5';

import { cn } from '@/utils/cn';

const useModal = (initiallyOpen = false) => {
  const [isOpen, setIsOpen] = useState(initiallyOpen);
  const modalRef = useRef<HTMLDivElement>(null);

  const open = () => setIsOpen(true);

  const close = () => setIsOpen(false);

  const handleClickOutside = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      close();
    }
  };

  const Modal = ({
    children,
    buttonProps,
  }: {
    children: ReactNode;
    buttonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
  }) => {
    if (!isOpen) return null;

    return ReactDOM.createPortal(
      <AnimatePresence>
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50"
          onClick={handleClickOutside}
        >
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="relative max-h-[60vh] max-w-2xl rounded-lg bg-white"
          >
            <button
              {...buttonProps}
              type="button"
              onClick={close}
              className={cn(
                'absolute right-2 top-1 text-white',
                buttonProps && buttonProps.className,
              )}
            >
              <IoCloseSharp size={30} />
            </button>
            {children}
          </motion.div>
        </div>
      </AnimatePresence>,
      document.body,
    );
  };

  return {
    open,
    Modal,
  };
};

export { useModal };
