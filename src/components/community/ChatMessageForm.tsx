import { motion } from 'framer-motion';
import { useForm, SubmitHandler } from 'react-hook-form';
import { IoSend } from 'react-icons/io5';

type Inputs = {
  chatMsg: string;
};

const ChatMessageForm = () => {
  const { register, handleSubmit, watch } = useForm<Inputs>();

  const chatMsg = watch('chatMsg');

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (!data.chatMsg.trim()) {
      return;
    }
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-3 flex gap-5">
      <motion.input
        type="text"
        placeholder="메시지를 입력해주세요"
        autoComplete="off"
        {...register('chatMsg')}
        className="w-full rounded-3xl border-2 border-kt-gray-2 bg-transparent px-5 py-2 drop-shadow-[0_3px_3px_rgba(0,0,0,0.6)] focus:border-kt-white focus-visible:outline-none"
        animate={{
          width: chatMsg?.trim().length > 0 ? '96%' : '100%',
        }}
        transition={{ duration: 0.8 }}
      />
      {chatMsg?.trim().length > 0 && (
        <motion.button
          type="submit"
          className="flex size-10 items-center justify-center rounded-full bg-kt-gray-2 drop-shadow-[0_3px_3px_rgba(0,0,0,0.6)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <IoSend size={22} />
        </motion.button>
      )}
    </form>
  );
};
export default ChatMessageForm;
