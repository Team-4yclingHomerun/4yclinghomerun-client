import { AiFillCaretRight } from 'react-icons/ai';

import { Message } from '@/types/ChatMessage';
import ChatMessageTime from './ChatMessageTime';
import { cn } from '@/utils/cn';

const ChatMessageOtherUser = ({
  message,
  isViewTime,
  isViewUserName,
}: {
  message: Message;
  isViewTime: boolean;
  isViewUserName: boolean;
}) => {
  return (
    <div key={message.id} className={cn('px-2', !isViewTime && 'py-2')}>
      {!isViewUserName && (
        <div className="ml-2 text-sm text-kt-white">{message.username}</div>
      )}

      <div className="text-md relative drop-shadow-[0_3px_3px_rgba(0,0,0,0.6)]">
        <div className="absolute left-0 -rotate-45 transform">
          <AiFillCaretRight color="#717781" size={15} />
        </div>
        <p className="rou1nded-sm ml-2 w-fit max-w-[50%] bg-kt-gray-2 px-2 py-1">
          {message.content}
        </p>
      </div>
      <div className="ml-2 mt-1 text-xs text-gray-400">
        {!isViewTime && <ChatMessageTime time={message.timestamp.toString()} />}
      </div>
    </div>
  );
};
export default ChatMessageOtherUser;
