import { useParams } from 'react-router-dom';

import { useAxios } from '@/hooks/useAxios';
import { IPitcherDetailReponse, TProfile } from '@/types/player';

import ErrorBoundary from '@/components/error/ErrorBoundary';
import DetailSkeleton from '@/components/player/common/DetailSkeleton';
import Profile from '@/components/player/common/Profile';
import ProfileError from '@/components/player/common/ProfileError';
import SectionLayout from '@/components/player/common/SectionLayout';
import RecentRecordTable from '@/components/player/pitcher/RecentRecordTable';
import SeasonRecordTable from '@/components/player/pitcher/SeasonRecordTable';
import YearRecordTable from '@/components/player/pitcher/YearRecordTable';

const PitcherDetailPage = () => {
  const { id } = useParams();

  const {
    data,
    isLoading,
    isError,
  }: { data: IPitcherDetailReponse; isLoading: boolean; isError: boolean } =
    useAxios<IPitcherDetailReponse>({
      method: 'GET',
      url: `/player/pitcherdetail?pcode=${id}`,
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
            babip: '',
            bb: 0,
            bf: 0,
            bk: 0,
            bs: 0,
            er: 0,
            era: '',
            err: 0,
            fip: '',
            fo: 0,
            gamenum: 0,
            go: 0,
            gyear: '',
            havg: '',
            hit: 0,
            hold: 0,
            hp: 0,
            hr: 0,
            ib: 0,
            inn2: 0,
            innDisplay: '',
            kbb: '',
            kk: 0,
            l: 0,
            oavg: '',
            pcode: '',
            playerName: '',
            qs: 0,
            qsPlus: 0,
            r: 0,
            ravg: '',
            sf: 0,
            sh: 0,
            sho: 0,
            start: 0,
            sv: 0,
            svo: 0,
            tugucount: 0,
            turfSave: 0,
            w: 0,
            wCg: 0,
            war: '',
            whip: '',
            winShares: '',
            wl: '',
            wp: 0,
            wra: '',
          },
          seasonsummaryfutures: {
            babip: '',
            bb: 0,
            bf: 0,
            bk: 0,
            bs: 0,
            er: 0,
            era: '',
            err: 0,
            fip: '',
            fo: 0,
            gamenum: 0,
            go: 0,
            gyear: '',
            havg: '',
            hit: 0,
            hold: 0,
            hp: 0,
            hr: 0,
            ib: 0,
            inn2: 0,
            innDisplay: '',
            kbb: '',
            kk: 0,
            l: 0,
            oavg: '',
            pcode: '',
            playerName: '',
            qs: 0,
            qsPlus: 0,
            r: 0,
            ravg: '',
            sf: 0,
            sh: 0,
            sho: 0,
            start: 0,
            sv: 0,
            svo: 0,
            tugucount: 0,
            turfSave: 0,
            w: 0,
            wCg: 0,
            war: '',
            whip: '',
            winShares: '',
            wl: '',
            wp: 0,
            wra: '',
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
            type="pitcher"
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
export default PitcherDetailPage;
