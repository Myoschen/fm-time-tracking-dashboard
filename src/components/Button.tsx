interface Props {
  label: string;
  active: boolean;
  handler: () => void;
}

function Button({ label, active, handler }: Props) {
  return (
    <button
      className={`${
        active ? 'text-white' : 'text-desaturated-blue'
      }  hover:text-white transition-colors duration-300 ease-in-out`}
      type="button"
      onClick={handler}
    >
      {label}
    </button>
  );
}

export default Button;
