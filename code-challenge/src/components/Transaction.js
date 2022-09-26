function Transaction({date, description, category, amount}) {
  return (
    <tr key>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td> 
    </tr>
  );
}

export default Transaction;
