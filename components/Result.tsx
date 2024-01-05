export interface ResultProps {
  age: {
    day: number | string;
    month: number | string;
    year: number | string;
  };
}

const Result = ({ age }: ResultProps) => {
  return (
    <section>
      <div className="text-[3.2rem] font-extrabold italic leading-[3rem]">
        <h1>
          <span className="text-purple pr-2.5">
            {age.year ? age.year : "- -"}
          </span>
          years
        </h1>
        <h1>
          <span className="text-purple pr-2.5">
            {age.month ? age.month : "- -"}
          </span>
          months
        </h1>
        <h1>
          <span className="text-purple pr-2.5">
            {age.day ? age.day : "- -"}
          </span>
          days
        </h1>
      </div>
    </section>
  );
};

export default Result;
