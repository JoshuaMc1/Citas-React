import Paciente from "./Paciente";

const ListadoPacientes = ({ patients, setPatient, deletePatient }) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {patients && patients.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
          <p className="text-lg font-black mt-5 mb-10 text-center">
            Administra tus
            <span className="text-emerald-600 font-bold">
              {" "}
              Pacientes y Citas
            </span>
          </p>

          {patients.map((patient) => (
            <Paciente
              key={patient.id}
              patient={patient}
              setPatient={setPatient}
              deletePatient={deletePatient}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
          <p className="text-lg font-black mt-5 mb-10 text-center">
            Comienza agregando pacientes
            <span className="text-emerald-600 font-bold">
              {" "}
              y aparecerán en este lugar
            </span>
          </p>
        </>
      )}
    </div>
  );
};

export default ListadoPacientes;
