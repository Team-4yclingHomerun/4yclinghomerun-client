import TeamLineup from './TeamLineup';

const GameLineup = () => {
  return (
    <main className="flex w-full gap-20 overflow-hidden">
      <section className="w-1/2">
        <TeamLineup isHome={false} />
      </section>
      <section className="w-1/2">
        <TeamLineup isHome={true} />
      </section>
    </main>
  );
};

export default GameLineup;
