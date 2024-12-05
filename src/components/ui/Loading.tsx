export function Loading() {
  return (
    <tbody>
      <tr>
        <td colSpan={5} className="h-10 bg-gray-100/70 animate-pulse"></td>
      </tr>
      <tr>
        <td colSpan={5} className="h-10 bg-gray-100/30 animate-pulse"></td>
      </tr>
      <tr>
        <td colSpan={5} className="h-10 bg-gray-100/70 animate-pulse"></td>
      </tr>
      <tr>
        <td colSpan={5} className="h-10 bg-gray-100/30 animate-pulse"></td>
      </tr>
    </tbody>
  );
}