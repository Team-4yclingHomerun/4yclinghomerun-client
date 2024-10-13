import { useEffect, useRef, useState } from 'react';

import ChatMessageOtherUser from './ChatMessageOtherUser';
import ChatMessageLoginUser from './ChatMessageLoginUser';
import { MockChatMessage } from '@/mocks/community/MockChatMessage';
import '@/styles/chat.css';

const ChatMessageDisplay = () => {
  const [userName] = useState('Me');
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const containerHeight = containerRef.current.scrollHeight;
      containerRef.current.scrollTo(0, containerHeight);
    }
  }, []);

  return (
    <main ref={containerRef} className="scrollbar-custom h-[80%]">
      {MockChatMessage.map((message, index) => {
        const nextMessage = MockChatMessage[index + 1];
        const nextMessageIsSameTime =
          nextMessage &&
          message.timestamp.getMinutes() ===
            nextMessage.timestamp.getMinutes() &&
          message.timestamp.getHours() === nextMessage.timestamp.getHours();

        const prevMessage = index > 0 ? MockChatMessage[index - 1] : null;
        const isViewUserName =
          prevMessage &&
          prevMessage.username === message.username &&
          prevMessage.timestamp.getMinutes() ===
            message.timestamp.getMinutes() &&
          prevMessage.timestamp.getHours() === message.timestamp.getHours();

        return message.username === userName ? (
          <ChatMessageLoginUser
            key={message.id}
            message={message}
            isViewTime={nextMessageIsSameTime}
          />
        ) : (
          <ChatMessageOtherUser
            key={message.id}
            message={message}
            isViewTime={nextMessageIsSameTime}
            isViewUserName={isViewUserName!}
          />
        );
      })}
    </main>
  );
};
export default ChatMessageDisplay;
