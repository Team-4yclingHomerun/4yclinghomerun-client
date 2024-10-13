import { HiOutlineSpeakerphone } from 'react-icons/hi';

import GuidelinesModalContent from './GuidelinesModalContent';
import useModal from '@/hooks/useModal';

const ChatHeader = () => {
  const { open, Modal } = useModal();

  return (
    <>
      <header className="flex items-center justify-end">
        <button
          onClick={open}
          className="mb-3 flex h-fit w-fit items-center justify-center gap-2 rounded-md bg-kt-red-2 px-3 py-1 drop-shadow-[0_3px_3px_rgba(0,0,0,0.3)]"
        >
          <HiOutlineSpeakerphone size={20} />
          <p>커뮤니티 운영방침</p>
        </button>
      </header>
      <Modal>
        <GuidelinesModalContent />
      </Modal>
    </>
  );
};
export default ChatHeader;
