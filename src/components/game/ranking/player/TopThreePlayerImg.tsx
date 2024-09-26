import goldMedal from '@/assets/game/gold_medal.png';

const TopThreePlayerImg = ({ playerImg }: { playerImg: string }) => {
  return (
    <section className="relative w-1/2">
      <img
        src={playerImg}
        className="bg-gradient-to-r from-kt-red-2 to-red-900 p-2"
      />
      <img src={goldMedal} className="absolute left-1 top-1 w-14" />
    </section>
  );
};
export default TopThreePlayerImg;
