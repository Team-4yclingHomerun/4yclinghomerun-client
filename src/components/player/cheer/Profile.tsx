import { TCheer } from '@/types/player';

const Profile = ({ items, isError }: { items: TCheer; isError: boolean }) => {
  if (isError) {
    throw new Error('Error');
  }

  const filteredPictures: [string, string][] = Object.entries(items)
    .filter(([key]) => key.includes('Img'))
    .map(([key, value]) => [key, String(value)]);

  const formatBirthDay = (dateString: string): string => {
    const parts = dateString.split('.'); // '0000.00.00'를 ['0000', '00', '00']로 분리
    if (parts.length !== 3) return ''; // 잘못된 형식 처리

    const month = parts[1].charAt(1); // 두 번째 자리: 월
    const day = parts[2].slice(-2); // 뒤쪽 자리: 일의 자리 두 개

    return `${month}${day}`; // '0000' + '00' 형태로 결합
  };

  return (
    <>
      <div
        className="h-[600px] w-full"
        style={{
          backgroundImage: `url(${items.titleImgPath})`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="ml-[30%] h-full py-[5%]">
          <div className="flex h-full animate-fadein flex-col justify-between rounded-lg bg-white p-6 text-black shadow-lg">
            <h2 className="mb-4 text-xl font-bold">프로필 정보</h2>
            <div className="mb-2 text-xl font-semibold">
              <span className="font-semibold">{items.leaderName} </span>(
              {items.leaderEngName})
            </div>
            <div className="mb-2">
              <span className="mr-1 font-semibold text-kt-gray-2">출생</span>
              {items.leaderBirthDay}
            </div>
            <div className="mb-2">
              <span className="mr-1 font-semibold text-kt-gray-2">신체</span>
              {items.leaderHeight} cm
            </div>
            <div className="mb-2">
              <span className="mr-1 font-semibold text-kt-gray-2">소속팀</span>
              KT Wiz ({items.leaderPosition},{' '}
              {formatBirthDay(items.leaderBirthDay)})
            </div>
            <div className="mb-2">
              <span className="mr-1 font-semibold text-kt-gray-2">경력</span>{' '}
              {(items?.leaderCareer || '').split(',').map((item, index) => (
                <span key={index} className="mr-2 rounded-md border p-1">
                  {item}
                </span>
              ))}
            </div>

            <div className="mb-2">
              <div className="flex max-h-full">
                {filteredPictures.map((item, index) => (
                  <a
                    key={index}
                    href={item[1]}
                    className="hover: w-full px-2"
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
