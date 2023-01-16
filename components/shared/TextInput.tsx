type TextInputProps = {
  id: string
  label: string
  name: string
  value: string
  onChange: Function
}

export default function TextInput(props: TextInputProps) {
    return (
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-white-700">
          {props.label} 
        </label>
        <div className="mt-1">
          <input
            type="text"
            name={props.name}
            value={props.value}
            id={props.id}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-indigo-500 sm:text-sm"
            onChange={(event) => { props.onChange(event) }}
          />
        </div>
      </div>
    )
  }