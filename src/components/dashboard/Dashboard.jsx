import BalanceHistoryChart from '../BalanceHistoryChart/BalanceHistoryChart';
import DailyActivityChart from '../DailyActivityChart/DailyActivityChart';
import PieChart from '../PieChart/PieChart';

const Dashboard = () => {
  
  return (
    <div className='flex w-full justify-center items-center h-full'>
    <div className='mx-auto'>
    <BalanceHistoryChart />
    <DailyActivityChart />
    <PieChart />
    </div>
    </div>
  );
};

export default Dashboard;
