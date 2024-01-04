import InputForm from "@/components/InputForm";
import Result from "@/components/Result";

const age = {
  days: 26,
  months: 3,
  years: 33,
};

const page = () => {
  return (
    <section className="bg-off_white min-h-svh flex align-center justify-center py-28">
      <div className="bg-white w-[93%]  rounded-[25px] rounded-br-[130px] px-6 py-12 space-y-14">
        <InputForm />
        <Result age={age} />
      </div>
    </section>
  );
};

export default page;
