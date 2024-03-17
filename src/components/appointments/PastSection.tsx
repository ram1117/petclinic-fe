import HeaderWrapper from "../../atoms/HeaderWrapper";
import CancelButton from "./CancelButton";

interface pastSectionProps {
  events: {
    [key: string]: any;
  }[];
}

const PastSection = ({ events }: pastSectionProps) => {
  const hasBookings = events.length !== 0;
  return (
    <div className="my-8 bg-white rounded-md shadow-md shadow-slate-200 p-4">
      <div className="my-4 border-b">
        <HeaderWrapper
          title="Past Appointments"
          className="!text-lg lg:!text-xl font-semibold pb-2"
        />
      </div>
      {!hasBookings && (
        <p className="my-4 text-center italic text-sm">
          You have no appointments
        </p>
      )}

      <ul className="flex flex-col gap-8 lg:gap-4">
        {events.map((item: any) => {
          const date = new Date(item.slot.slot);

          return (
            <li
              key={item.id}
              className="grid grid-cols-1 lg:grid-cols-11 gap-2 py-2 lg:py-3"
            >
              <h2 className="col-span-1 lg:col-span-3">
                {date.toDateString()} - {date.toLocaleTimeString()}
              </h2>
              <h2 className="col-span-1 lg:col-span-1">{item.pet.name}</h2>
              <h2 className="col-span-1 lg:col-span-3">
                {item.treatment.title}
              </h2>
              <h2 className="col-span-1 lg:col-span-3">{item.doctor.name}</h2>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PastSection;
