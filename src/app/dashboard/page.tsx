import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import AnalyticsCards from "../components/AnalyticsCards";
import Chart from "../components/Chart";
import TransactionsTable from "../components/TransactionsTable";

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 p-5">
        <Header />
        <div className="mt-5 grid grid-cols-1 gap-6">
          <AnalyticsCards />
          <Chart />
          <TransactionsTable />
        </div>
      </div>
    </div>
  );
}
