import React from "react";
import { Link } from "react-router-dom";
import DataMap from "../Components/DashboardPageComponents/DataMap";
import DataTable from "../Components/DashboardPageComponents/DataTable";
import HorizonBarChart from "../Components/DashboardPageComponents/Lists/BarChart";
import LineChart from "../Components/DashboardPageComponents/Lists/LineChart";
import DataMap2 from "../Components/DashboardPageComponents/DataMap2";
import DataMap3 from "../Components/DashboardPageComponents/DataMap3";

const Dashboard = () => {
	return (
		// className='bg-[#132442]'
		<section className="bg-[#132442] pt-[8vh] px-[40px] w-full pb-12">
			{/* <div className='text-center'>
    <div className='text-center text-blue-800 font-700 text-[24px]'>Dashboard</div>
    <Link to='/'>Go to Home</Link>
    </div> */}
			{/* Map */}

			<div className="flex justify-between gap-x-5">
				{/* Left Container */}
				<div className="w-[1000px]">
					<div className="mb-[8px]  ">
						<div className="w-full h-auto flex justify-between items-center ">
							<div className="w-[600px] h-[120px]">
								<LineChart />
							</div>
							<div className="w-[600px] h-[120px]">
								<LineChart />
							</div>
							<div className="w-[300px] h-[100px] flex justify-end">
								<HorizonBarChart />
							</div>
						</div>
					</div>

					<div className="">
						{/* <DataMap /> */}
						{/* <DataMap2/> */}
						<DataMap3/>
					</div>
				</div>

				{/* Right Container */}
				<div className="w1/4">
					<DataTable />
				</div>
			</div>
		</section>
	);
};

export default Dashboard;
