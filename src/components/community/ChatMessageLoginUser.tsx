import { AiFillCaretRight } from 'react-icons/ai';

import { Message } from '@/types/ChatMessage';
import ChatMessageTime from './ChatMessageTime';
import { cn } from '@/utils/cn';

const ChatMessageLoginUser = ({
  message,
  isViewTime,
}: {
  message: Message;
  isViewTime: boolean;
}) => {
  return (
    <div key={message.id} className={cn('px-2', !isViewTime && 'py-2')}>
      <div className="text-md relative flex justify-end drop-shadow-[0_3px_3px_rgba(0,0,0,0.6)]">
        <div className="absolute right-0 rotate-[-135deg] transform">
          <AiFillCaretRight color="#0098af" size={15} />
        </div>
        <p className="mr-2 w-fit max-w-[50%] rounded-sm bg-kt-blue px-2 py-1">
          {message.content}
        </p>
      </div>
      <div className="mr-2 mt-1 flex justify-end text-xs text-gray-400">
        {!isViewTime && <ChatMessageTime time={message.timestamp.toString()} />}
      </div>
    </div>
  );
};
export default ChatMessageLoginUser;
