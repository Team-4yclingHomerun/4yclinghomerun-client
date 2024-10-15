import { useModal } from '@/hooks/useModal';

type FooterModalProps = {
  title?: string;
  subTitle?: string;
  content?: string;
  buttonText: string;
};

const FooterModal = ({
  title = '',
  subTitle = '',
  content = '',
  buttonText,
}: FooterModalProps) => {
  const { Modal, open } = useModal();

  const formattedContent = content.split('\n').map((line, index) => (
    <p key={index} className="break-keep text-sm text-gray-500">
      {line}
    </p>
  ));

  return (
    <>
      <button onClick={open} className="text-gray-600 hover:text-gray-900">
        {buttonText}
      </button>
      <Modal
        divClassname="p-6"
        buttonProps={{
          className:
            'text-white right-6 top-6 rounded-xl font-semibold focus:outline-none focus:ring-2 focus:ring-offset-1 transition-all duration-300 px-1 py-1 bg-gray-500 text-white hover:bg-gray-600 focus:ring-gray-400',
        }}
      >
        <div className="mb-4">
          <h2 className="text-xl font-extrabold">{title}</h2>
          <h3 className="text-base font-bold text-gray-500">{subTitle}</h3>
        </div>
        <div className="dropdown-scroll flex-grow overflow-hidden rounded-lg bg-gray-100">
          <div className="max-h-[calc(60vh-8rem)] overflow-y-auto p-5">
            {formattedContent}
          </div>
        </div>
      </Modal>
    </>
  );
};

export default FooterModal;
