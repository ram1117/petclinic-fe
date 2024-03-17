import apiPaths from "../../apiPaths";
import HeaderWrapper from "../../atoms/HeaderWrapper";

interface TreatmentDataType {
  [key: string]: string | string[] | number | any;
}

const TreatmentPage = async () => {
  const treatmentsData = await fetch(apiPaths.getTreatments()).then(
    (response) => response.json(),
  );

  return (
    <section className="min-h-[50vh] flex flex-col gap-4 items-center p-4">
      <HeaderWrapper title="Our services" className="mb-4" />
      {treatmentsData.error && (
        <p className="my-8 text-lg">Unable to retrieve data at this moment..</p>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-6">
        {treatmentsData.map((item: TreatmentDataType) => (
          <div
            key={item.id}
            className="rounded-md shadow-md shadow-slate-400 p-4 lg:p-8 flex gap-4 flex-col items-center bg-white"
          >
            <h2 className="text-lg lg:text-xl font-semibold">{item.title} </h2>
            <h4>{item.description}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TreatmentPage;
