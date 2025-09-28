import type { IChartTooltipProps } from './types'

export const ChartTooltip = ({
	active,
	payload,
	label
}: IChartTooltipProps) => {
	if (active && payload && payload.length) {
		const { count: currentValue, percentage } = payload[0].payload

		return (
			<div className='p-4 bg-slate-900 flex flex-col gap-4 rounded-md'>
				<p className='text-medium text-lg text-white'>{label}</p>
				<p className='text-sm text-blue-400'>
					Amount:
					<span className='ml-2'>{currentValue}</span>
				</p>
				<p className='text-sm text-indigo-400'>
					Prcentage:
					<span className='ml-2'>{percentage}%</span>
				</p>
			</div>
		)
	}
	return null
}
