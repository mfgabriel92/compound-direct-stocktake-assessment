function Row({ opacity }: { opacity: number }) {
  return (
    <tr>
      <td
        colSpan={5}
        className={`h-10 animate-pulse border-4 border-white bg-gray-100/${opacity}`}
      ></td>
    </tr>
  );
}

export function Loading() {
  return (
    <tbody>
      <Row opacity={70} />
      <Row opacity={30} />
      <Row opacity={70} />
      <Row opacity={30} />
    </tbody>
  );
}
