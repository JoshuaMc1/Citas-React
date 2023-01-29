const Paciente = ({ patient, setPatient, deletePatient }) => {
  const { petName, owner, email, discharged, symptoms, id } = patient;

  const handleDelete = () => {
    const response = confirm("Deseas eliminar a este paciente?");

    if (response) deletePatient(id);
  };

  return (
    <div className="mx-5 my-5 bg-white shadow-md px-5 py-10 rounded-lg border border-emerald-700">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre:
        <span className="font-normal normal-case"> {petName}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario:
        <span className="font-normal normal-case"> {owner}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Correo electrónico:
        <span className="font-normal normal-case"> {email}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha de alta:
        <span className="font-normal normal-case"> {discharged}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Síntomas: <span className="font-normal normal-case"> {symptoms}</span>
      </p>

      <div className="flex justify-between mt-10">
        <button
          className="py-2 px-10 bg-emerald-600 hover:bg-emerald-700 text-white font-bold uppercase rounded-md"
          type="button"
          onClick={() => {
            setPatient(patient);
          }}
        >
          Editar
        </button>
        <button
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-md"
          type="button"
          onClick={handleDelete}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Paciente;
