import { TProfile } from '@/types/player';

interface ProfileProps {
  items: TProfile;
  type: `coach` | 'pitcher' | 'hitter' | 'cheer';
  isError: boolean;
}

const Profile = ({ items, type, isError }: ProfileProps) => {
  if (isError) {
    throw new Error('Error');
  }

  const filteredPictures: [string, string][] = Object.entries(items)
    .filter(([key]) => key.includes('Img'))
    .map(([key, value]) => [key, String(value)]);
  return (
    <>
      <div
        className="h-[600px] w-full"
        style={{
          backgroundImage: `url(${items.playerPrvwImg2})`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="ml-[30%] h-full py-[5%]">
          <div className="flex h-full animate-fadein flex-col justify-between rounded-lg bg-white p-6 text-black shadow-lg">
            <h2 className="mb-4 text-xl font-bold">프로필 정보</h2>
            <div className="mb-2 text-xl font-semibold">
              <span className="font-semibold">{items.playerName} </span>(
              {items.engName})
            </div>
            <div className="mb-2">
              <span className="mr-1 font-semibold text-kt-gray-2">출생</span>
              {items.birth}
            </div>
            <div className="mb-2">
              <span className="mr-1 font-semibold text-kt-gray-2">신체</span>
              {items.height} cm,{items.weight} kg
            </div>
            <div className="mb-2">
              <span className="mr-1 font-semibold text-kt-gray-2">소속팀</span>
              KT Wiz ({items.position}, {items.backnum})
            </div>
            <div className="mb-2">
              <span className="mr-1 font-semibold text-kt-gray-2">경력</span>{' '}
              {(items?.career || '').split('-').map((item, index) => (
                <span key={index} className="mr-2 rounded-md border p-1">
                  {item}
                </span>
              ))}
            </div>
            {type === 'pitcher' || type === 'hitter' ? (
              <>
                <div className="mb-2">
                  <span className="mr-1 font-semibold text-kt-gray-2">
                    투타
                  </span>
                  {items.hittype}
                </div>
                <div className="mb-2">
                  <span className="mr-1 font-semibold text-kt-gray-2">
                    랭킹
                  </span>
                  {items.rank} 위
                </div>
                <div className="mb-2">
                  <span className="mr-1 font-semibold text-kt-gray-2">
                    점수
                  </span>
                  {items.energybarName}
                </div>
              </>
            ) : (
              <></>
            )}
            <div className="mb-2">
              <div className="flex max-h-full">
                {filteredPictures.map((item, index) => (
                  <a
                    key={index}
                    href={item[1]}
                    className="w-full px-2"
                    download={item[0]}
                  >
                    <img
                      src={item[1]}
                      alt="대표사진 이미지"
                      className="h-full w-full rounded-lg"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Profile;
