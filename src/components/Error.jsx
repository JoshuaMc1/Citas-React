const Error = ({ children }) => {
  return (
    <div className="bg-red-700 text-white text-center font-bold rounded-md uppercase p-3 mb-3">
      {children}
    </div>
  );
};

export default Error;
