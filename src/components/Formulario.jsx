import { useState, useEffect } from "react";
import Error from "./Error";

const Formulario = ({ patients, setPatients, patient, setPatient }) => {
  const [petName, setPetName] = useState(""),
    [owner, setOwner] = useState(""),
    [email, setEmail] = useState(""),
    [discharged, setDischarged] = useState(""),
    [symptoms, setSymptoms] = useState(""),
    [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(patient).length > 0) {
      setPetName(patient.petName);
      setOwner(patient.owner);
      setEmail(patient.email);
      setDischarged(patient.discharged);
      setSymptoms(patient.symptoms);
    }
  }, [patient]);

  const generateId = () =>
    Math.random().toString(36).substr(2) + Date.now().toString(36);

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([petName, owner, email, discharged, symptoms].includes("")) {
      setError(true);
      return;
    }

    setError(false);

    const patientObject = {
      petName,
      owner,
      email,
      discharged,
      symptoms,
    };

    if (patient.id) {
      patientObject.id = patient.id;

      const updatedPatients = patients.map((patientState) =>
        patientState.id === patient.id ? patientObject : patientState
      );

      setPatients(updatedPatients);
      setPatient({});
    } else {
      patientObject.id = generateId();
      setPatients([...patients, patientObject]);
    }

    setPetName("");
    setOwner("");
    setEmail("");
    setDischarged("");
    setSymptoms("");
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="text-lg font-black mt-5 text-center mb-10">
        Añade pacientes y
        <span className="text-emerald-600 font-bold"> Administralos</span>
      </p>

      <form
        className="bg-white shadow rounded-lg py-10 px-5 mb-10 border border-emerald-700"
        onSubmit={handleSubmit}
      >
        {error && (
          <Error>
            <p>Todos los campos son obligatorios</p>
          </Error>
        )}

        <div className="mb-5">
          <label
            className="block text-gray-700 font-bold uppercase"
            htmlFor="petName"
          >
            Nombre Mascota
          </label>
          <input
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="text"
            placeholder="Nombre de la mascota"
            id="petName"
            value={petName}
            onChange={(e) => setPetName(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            className="block text-gray-700 font-bold uppercase"
            htmlFor="owner"
          >
            Nombre Propietario
          </label>
          <input
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="text"
            placeholder="Nombre del propietario"
            id="owner"
            value={owner}
            onChange={(e) => setOwner(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            className="block text-gray-700 font-bold uppercase"
            htmlFor="email"
          >
            Correo electrónico
          </label>
          <input
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="email"
            placeholder="Correo electrónico del propietario"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            className="block text-gray-700 font-bold uppercase"
            htmlFor="discharged"
          >
            Alta
          </label>
          <input
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="date"
            id="discharged"
            value={discharged}
            onChange={(e) => setDischarged(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            className="block text-gray-700 font-bold uppercase"
            htmlFor="symptoms"
          >
            Síntomas
          </label>
          <textarea
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Describe los síntomas"
            id="symptoms"
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
          />
        </div>

        <input
          type="submit"
          className="bg-emerald-600 w-full p-3 text-white uppercase font-bold hover:bg-emerald-700 cursor-pointer transition-all rounded-lg"
          value={patient.id ? "Editar Paciente" : "Agregar Paciente"}
        />
      </form>
    </div>
  );
};

export default Formulario;
