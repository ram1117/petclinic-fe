import { DoctorDataType } from "../../app/doctors/page";
interface DetailTileProps {
  doctorData: DoctorDataType;
}

const DetailTile = ({ doctorData }: DetailTileProps) => {
  return (
    <div className="border-2">
      <h2>
        {doctorData.name} {doctorData.degree}
      </h2>
      <h2>{doctorData.experience}</h2>
      <h2>{doctorData.about}</h2>
      <h2>{doctorData.treatments.join(" , ")}</h2>
    </div>
  );
};

export default DetailTile;
