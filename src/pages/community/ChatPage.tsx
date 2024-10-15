import ChatHeader from '@/components/community/ChatHeader';
import ChatMessageDisplay from '@/components/community/ChatMessageDisplay';
import ChatMessageForm from '@/components/community/ChatMessageForm';

const ChatPage = () => {
  return (
    <div className="h-[75vh] rounded-lg bg-[rgba(245,250,255,0.2)] p-5">
      <ChatHeader />
      <ChatMessageDisplay />
      <ChatMessageForm />
    </div>
  );
};
export default ChatPage;
