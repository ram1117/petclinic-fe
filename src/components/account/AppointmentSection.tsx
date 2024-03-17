import Link from "next/link";
import HeaderWrapper from "../../atoms/HeaderWrapper";

interface AppointmentSectionProps {
  appointments: {
    id: string;
    doctor: { id: string; name: string };
    slot: { slot: string; doctorId: string };
  }[];
}

const AppointmentSection = ({ appointments }: AppointmentSectionProps) => {
  const hasAppointments = appointments.length !== 0;

  return (
    <div className="bg-white shadow-lg shadow-slate-300 rounded-md p-4 relative">
      <div className="my-4 flex flex-col gap-4 lg:gap-2 lg:flex-row justify-between items-center border-b py-2">
        <HeaderWrapper
          title="Upcoming Appointments"
          className="!font-semibold !text-lg"
        />
        <Link
          href="/appointments"
          className="rounded-md w-max px-6 py-1 lg:py-2 bg-link text-sm lg:text-base text-secondary-text"
        >
          Manage
        </Link>
      </div>
      {!hasAppointments && <p className="my-4 text-center">No appointments</p>}
      <ul>
        {hasAppointments &&
          appointments.map((item) => {
            const date = new Date(item.slot.slot);

            return (
              <li className="flex justify-between my-2" key={item.id}>
                <h2 className="font-medium">
                  {date.toLocaleDateString()} -{" "}
                  {date.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </h2>
                <h2 className="text-sm italic">{item.doctor.name}</h2>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default AppointmentSection;
