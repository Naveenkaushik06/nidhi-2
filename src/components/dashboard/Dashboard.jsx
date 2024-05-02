import BalanceHistoryChart from "./BalanceHistoryChart/BalanceHistoryChart";
import DailyActivityChart from "./DailyActivityChart/DailyActivityChart";
import PieChart from "./PieChart/PieChart";
import DashboardCards from "./DashboardCard/DashboardCards";
import Transfer from "./QuickTransfer/Transfer";
import RightCard from "./RightCard/RightCard";


const Dashboard = () => {
  
  return (
    // <div className='flex max-w-5/6 justify-center items-center h-full mt-20 ml-4'>
  
    <div className='grid grid-cols-2 justify-center items-center mt-20 h-auto gap-5 ml-64'>
    <div className="border justify-items-center justify-center mb-20">
    <DashboardCards />
    </div>
    <div className=" ml-20">
    <RightCard />
    </div>
    <div >
    <DailyActivityChart />
    </div>
    <div>
    <PieChart />
    </div>
     
    <div className="">
    <Transfer />
    </div>
    
   
    <BalanceHistoryChart />
    </div>
  
  );
};

export default Dashboard;
