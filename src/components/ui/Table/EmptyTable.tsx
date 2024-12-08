export function EmptyTable() {
  return (
    <tbody>
      <tr>
        <td colSpan={5} className={`h-20 text-center text-gray-400`}>
          No data to display
        </td>
      </tr>
    </tbody>
  );
}
