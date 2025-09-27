import type { IChartTooltipProps } from './types'

export const ChartTooltip = ({
	active,
	payload,
	label
}: IChartTooltipProps) => {
	if (active && payload) {
		const { count: currentValue, percentage } = payload[0].payload

		return (
			<div className='h-16 bg-white px-2 py-1'>
				<h3 className='text-xl font-bold text-center'>{label}</h3>
				<div className='flex gap-3 mb-1'>
					<h3 className='text-xl font-bold text-center'>
						count : {currentValue}
					</h3>
				</div>
				<h3 className='text-xl font-bold text-center'>
					percentage : {percentage}
				</h3>
			</div>
		)
	}
	return null
}
