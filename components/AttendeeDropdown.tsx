interface AttendeeDropdownProps {
  maxAttendees: number;
  value: number;
  onChange: any;
}

export default function AttendeeDropdown({
  maxAttendees,
  value,
  onChange,
}: AttendeeDropdownProps) {
  const renderOptions = () => {
    const options = [];

    for (let i = 1; i <= maxAttendees; i++) {
      options.push(
        <option key={`attendees-${i}`} value={i}>
          {i}
        </option>
      );
    }

    return options;
  };

  return (
    <select
      className="bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default sm:text-sm"
      onChange={(e) => {
        onChange(e?.target?.value || 1);
      }}
      value={value}
    >
      {renderOptions()}
    </select>
  );
}
