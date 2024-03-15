import apiPaths from "../../apiPaths";
import HeaderWrapper from "../../atoms/HeaderWrapper";
import DetailTile from "../../components/doctors/DetailTile";

export interface DoctorDataType {
  id: string;
  name: string;
  degree: string;
  experience: number;
  about: string;
  treatments: string[];
  workDays: number[];
}

const DoctorsPage = async () => {
  const doctorsData = await fetch(apiPaths.getDoctors()).then((response) =>
    response.json(),
  );

  console.log(doctorsData);

  return (
    <section className="min-h-[50vh] flex flex-col gap-4 items-center p-8 border-2">
      <HeaderWrapper title="Our Team" />
      {doctorsData.error && (
        <p className="my-8 text-lg">Unable to retrieve data at this moment..</p>
      )}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-6">
        {doctorsData &&
          doctorsData.map((item: DoctorDataType) => (
            <DetailTile key={item.id} doctorData={item} />
          ))}
      </div>
    </section>
  );
};

export default DoctorsPage;
