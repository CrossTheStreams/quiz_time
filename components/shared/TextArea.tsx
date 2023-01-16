import classNames from "classnames";

type TextInputProps = {
  id: string
  label: string
  name: string
  value: string
  onChange: Function
}

export default function TextArea(props: TextInputProps) {
  return (
    <div>
      <label htmlFor="comment" className="block text-sm font-medium text-white-700">
        Add your comment
      </label>
      <div className="mt-1">
        <textarea
          rows={4}
          name={props.name}
          id={props.id}
          onChange={(event) => { props.onChange(event) }}
          className="block w-full rounded-md border-gray-300 shadow-sm focus:outline-none sm:text-sm"
          value={props.value}
        />
      </div>
    </div>
  )
}