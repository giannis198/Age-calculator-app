interface ResultProps {
  age: {
    days: number;
    months: number;
    years: number;
  };
}

const Result = ({ age }: ResultProps) => {
  return (
    <section>
      <div className="text-[3.2rem] font-extrabold italic leading-[3rem]">
        <h1>
          <span className="text-purple pr-2">{age.years}</span>years
        </h1>
        <h1>
          <span className="text-purple pr-2">{age.months}</span>months
        </h1>
        <h1>
          <span className="text-purple pr-2">{age.days}</span>days
        </h1>
      </div>
    </section>
  );
};

export default Result;
