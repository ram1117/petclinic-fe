import { DoctorDataType } from "../../app/doctors/page";
interface DetailTileProps {
  doctorData: DoctorDataType;
}

const DetailTile = ({ doctorData }: DetailTileProps) => {
  return (
    <div className="rounded-md shadow-md shadow-slate-400 p-2 lg:p-4 flex gap-4 flex-col bg-white">
      <h2 className="text-lg lg:text-xl font-semibold">
        {doctorData.name}{" "}
        <span className="italic text-orange-500 font-medium text-base">
          {doctorData.degree}
        </span>
      </h2>

      <h4>{doctorData.about}</h4>
      <h4>
        Specialization -{" "}
        <span className="italic">{doctorData.treatments.join(" , ")}</span>
      </h4>
    </div>
  );
};

export default DetailTile;
