function Row() {
  return (
    <tr>
      <td
        colSpan={5}
        className="h-10 animate-pulse border-4 border-white bg-gray-100/70"
      ></td>
    </tr>
  );
}

export function Loading() {
  return (
    <tbody>
      <Row />
      <Row />
      <Row />
    </tbody>
  );
}
