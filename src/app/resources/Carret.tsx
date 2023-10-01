const Carret = ({ style = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    className={`transition-transform duration-500 ${style}`}
  >
    <path
      stroke="#384A69"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m16 10-4 4-4-4"
    />
  </svg>
);
export default Carret;
