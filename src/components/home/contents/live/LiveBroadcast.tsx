import { Link } from 'react-router-dom';
import { HiMiniPlayCircle } from 'react-icons/hi2';

import { Button } from '@/components/common/ui/button/button';
import { TVING_URL } from '@/constants/constant';

const LiveBroadcast = () => {
  return (
    <section className="relative h-full overflow-hidden rounded-lg bg-gradient-to-br from-[#494c53] to-[#241f1f] p-1">
      <article className="flex h-full justify-between rounded-lg bg-gradient-to-tr from-black to-gray-800 p-6 text-white">
        <header>
          <h1 className="mb-2 text-2xl font-bold text-red-500">생중계 보기</h1>
          <div className="mb-3 flex items-center space-x-2 text-base text-gray-300">
            <span className="font-semibold text-white">TVING</span>
            <span>•</span>
            <span>구독제</span>
          </div>
          <p className="text-sm italic text-red-400">
            스트리밍 서비스에 따라 액세스 요구사항이 다를 수 있습니다.
          </p>
        </header>

        <main className="mt-auto">
          <Link to={TVING_URL}>
            <Button variant="danger" className="flex">
              <HiMiniPlayCircle className="mr-2" size={24} />
              시청하러 가기
            </Button>
          </Link>
        </main>
      </article>
    </section>
  );
};

export default LiveBroadcast;
