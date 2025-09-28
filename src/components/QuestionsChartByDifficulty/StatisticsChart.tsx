import type { ChartData } from './types'

export const StatisticsChart = ({ chartData }: { chartData: ChartData[] }) => {
	return (
		<div className='flex flex-col gap-2 w-lg'>
			{chartData.map(item => (
				<div
					key={item.difficulty}
					className=' bg-secondary-light p-4 rounded-lg border-white border-2'
				>
					<h3 className='font-semibold text-lg text-primary'>
						{item.difficulty}
					</h3>
					<p className='text-2xl font-bold text-primary'>{item.count}</p>
					<p className='text-sm text-gray-400'>{item.percentage}% of total</p>
				</div>
			))}
		</div>
	)
}
