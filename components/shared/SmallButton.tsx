import classNames from "classnames";

type SmallButtonProps = {
  label: string,
  onClick: Function,
  className?: string
}

export default function SmallButton(props: SmallButtonProps) {
  const { className } = props;
  const buttonClassObj = {}
  buttonClassObj[className] = className

  return (
    <button
      type="button"
      className={
        classNames(
          "inline-flex items-center rounded border border-gray-300 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
          buttonClassObj
        )
      }
      onClick={() => props.onClick()}
    >
      {props.label}
    </button>
  )
}