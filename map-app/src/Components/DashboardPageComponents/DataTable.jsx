import React from 'react'
import RadarChartComponent from './Lists/RadarChartComponent'
import MonthYearSlider from './Lists/MonthYearSlider'

const DataTable = () => {
  return (
    <div className='w-[251px] h-[620px] flex flex-col justify-start items-center rounded-lg bg-[#3551a4]'>
    {/* <div className='text-white'>DataTable</div> */}
    <div className='w-[200px] h-[250px]' >
    <RadarChartComponent/>
    </div>
    <div>
      <MonthYearSlider/>
    </div>
    </div>
  )
}

export default DataTable