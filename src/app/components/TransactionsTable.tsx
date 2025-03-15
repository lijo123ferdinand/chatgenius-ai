"use client";

const TransactionsTable = () => {
  const transactions = [
    { id: "TRX123", amount: "₹5,000", status: "Completed" },
    { id: "TRX124", amount: "₹2,500", status: "Pending" },
    { id: "TRX125", amount: "₹3,200", status: "Failed" },
  ];

  return (
    <div className="bg-white p-5 shadow-lg rounded-lg">
      <h2 className="text-lg font-bold mb-3">Recent Transactions</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-3 text-left">Transaction ID</th>
            <th className="p-3 text-left">Amount</th>
            <th className="p-3 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((tx) => (
            <tr key={tx.id} className="border-t">
              <td className="p-3">{tx.id}</td>
              <td className="p-3">{tx.amount}</td>
              <td className="p-3">{tx.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionsTable;
