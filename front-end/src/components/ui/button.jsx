
const button = ({className, children, onClick}) => {

  return (
    <button className={`px-4 py-2 flex justify-between items-center gap-2 rounded-lg font-semibold text-sm ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default button;
