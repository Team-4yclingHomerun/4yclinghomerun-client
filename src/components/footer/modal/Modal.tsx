import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

import { motion, AnimatePresence } from 'framer-motion';
import { IoCloseSharp } from 'react-icons/io5';

import { Button } from '@/components/common/ui/button/button';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  subTitle?: string;
  content?: string;
};

const Modal = ({
  isOpen,
  onClose,
  title = '',
  subTitle = '',
  content = '',
}: ModalProps) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen, onClose]);

  const formattedContent = content.split('\n').map((line, index) => (
    <p key={index} className="break-keep text-sm text-gray-500">
      {line}
    </p>
  ));

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            ref={modalRef}
            className="relative flex max-h-[60vh] w-full max-w-2xl flex-col rounded-lg bg-white p-6 shadow-xl"
          >
            <Button
              onClick={onClose}
              size="small"
              variant="danger"
              className="absolute right-6 top-6 rounded-xl px-1 py-1"
            >
              <IoCloseSharp size={24} />
            </Button>
            <div className="mb-4">
              <h2 className="text-xl font-extrabold">{title}</h2>
              <h3 className="text-base font-bold text-gray-500">{subTitle}</h3>
            </div>
            <div className="dropdown-scroll flex-grow overflow-hidden rounded-lg bg-gray-100">
              <div className="max-h-[calc(60vh-8rem)] overflow-y-auto p-5">
                {formattedContent}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );

  return createPortal(
    modalContent,
    document.getElementById('modal-layout') as HTMLElement,
  );
};

export default Modal;
