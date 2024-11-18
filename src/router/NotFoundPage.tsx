import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/common/ui/button/button';

const NotFoundPage = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div className="flex h-screen items-center justify-center bg-gray-300">
      <div className="flex w-fit items-center justify-center gap-10 rounded-lg bg-kt-white px-28 py-16 drop-shadow-lg">
        <div className="text-black">
          <h1 className="mb-4 text-7xl font-bold">404 ERROR</h1>
          <h2 className="mb-6 text-3xl font-semibold">
            페이지를 찾을 수 없습니다
          </h2>
          <p>페이지가 존재하지 않거나, 사용할 수 없는 페이지입니다.</p>
          <p>입력하신 주소가 정확한지 다시 한 번 확인해주세요 :)</p>
          <div className="mt-6 space-x-2">
            <Button variant="danger" onClick={goBack} className="rounded-md">
              이전 페이지
            </Button>
            <Button onClick={() => navigate('/')} className="rounded-md">
              KT WIZ 홈
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NotFoundPage;
