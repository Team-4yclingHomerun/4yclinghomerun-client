import { useParams } from 'react-router-dom';

import { useAxios } from '@/hooks/useAxios';
import { IHitterDetailReponse, TProfile } from '@/types/player';

import ErrorBoundary from '@/components/error/ErrorBoundary';
import DetailSkeleton from '@/components/player/common/DetailSkeleton';
import Profile from '@/components/player/common/Profile';
import ProfileError from '@/components/player/common/ProfileError';
import SectionLayout from '@/components/player/common/SectionLayout';
import RecentRecordTable from '@/components/player/hitter/RecentRecordTable';
import SeasonRecordTable from '@/components/player/hitter/SeasonRecordTable';
import YearRecordTable from '@/components/player/hitter/YearRecordTable';

const HitterDetailPage = () => {
  const { type, id } = useParams();

  const {
    data,
    isLoading,
    isError,
  }: { data: IHitterDetailReponse; isLoading: boolean; isError: boolean } =
    useAxios<IHitterDetailReponse>({
      method: 'GET',
      url: `/player/${type}detail/pcode-${id}`,
      initialData: {
        data: {
          gameplayer: {
            backnum: '',
            birth: '',
            bloodGroups: '',
            bornPlace: '',
            career: '',
            career2: '',
            debutYear: '',
            energybar: 0,
            energybarName: '',
            engName: '',
            gyear: '',
            hasFanpage: 'N',
            height: '',
            hittype: '',
            mobilePlayerImg: '',
            mobilePlayerImg1: '',
            mobilePlayerImg2: '',
            money: '',
            pcode: '',
            playerName: '',
            playerPrvwImg: '',
            playerPrvwImg1: '',
            playerPrvwImg2: '',
            playerPrvwImg3: '',
            position: '',
            position2: '',
            promise: '',
            rank: 0,
            rankName: '',
            teamCode: '',
            teamName: '',
            weight: '',
          },
          recentgamerecordlist: [],
          recentgamerecordlistfutures: [],
          seasonsummary: {
            ab: 0,
            babip: '',
            bb: 0,
            bbkk: '',
            bra: '',
            cs: 0,
            finalHit: 0,
            gamenum: 0,
            gd: 0,
            gyear: '',
            h2: 0,
            h3: 0,
            hit: 0,
            hp: 0,
            hr: 0,
            hra: '',
            ib: 0,
            kk: 0,
            ops: '',
            opsPlus: '',
            pa: 0,
            pcode: '',
            rbi: 0,
            run: 0,
            sb: 0,
            sbTryCn: 0,
            sba: '',
            sf: 0,
            sh: 0,
            slg: '',
            spHra: '',
            war: '',
            winShares: '',
            woba: '',
            wraa: '',
            xbhrun: '',
          },
          seasonsummaryfutures: {
            ab: 0,
            babip: '',
            bb: 0,
            bbkk: '',
            bra: '',
            cs: 0,
            finalHit: 0,
            gamenum: 0,
            gd: 0,
            gyear: '',
            h2: 0,
            h3: 0,
            hit: 0,
            hp: 0,
            hr: 0,
            hra: '',
            ib: 0,
            kk: 0,
            ops: '',
            opsPlus: '',
            pa: 0,
            pcode: '',
            rbi: 0,
            run: 0,
            sb: 0,
            sbTryCn: 0,
            sba: '',
            sf: 0,
            sh: 0,
            slg: '',
            spHra: '',
            war: '',
            winShares: '',
            woba: '',
            wraa: '',
            xbhrun: '',
          },
          yearrecordlist: [],
        },
      },
      shouldFetchOnMount: true,
    });

  const { gameplayer, recentgamerecordlist, seasonsummary, yearrecordlist } =
    data.data;
  const arraySeasonsummary = [seasonsummary];

  return (
    <>
      {isLoading ? (
        <DetailSkeleton />
      ) : (
        <ErrorBoundary fallback={<ProfileError />}>
          <Profile
            items={gameplayer as TProfile}
            isError={isError}
            type="hitter"
          ></Profile>

          <SectionLayout title="정규리그">
            <SeasonRecordTable items={arraySeasonsummary} />
          </SectionLayout>
          <br />

          <SectionLayout title="최근 5경기">
            <RecentRecordTable items={recentgamerecordlist} />
          </SectionLayout>
          <br />

          <SectionLayout title="통산기록">
            <YearRecordTable items={yearrecordlist} />
          </SectionLayout>
        </ErrorBoundary>
      )}
    </>
  );
};
export default HitterDetailPage;
