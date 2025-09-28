import { NUMBER_OF_QUESTIONS } from '../../utils/constants'
import type { IChartTooltipProps } from './types'

export const ChartTooltip = ({ active, payload }: IChartTooltipProps) => {
	if (active && payload && payload.length) {
		const { count: currentValue } = payload[0].payload

		return (
			<div className='p-4 bg-slate-900 flex flex-col gap-4 rounded-md'>
				<p className='text-sm text-blue-400'>
					{NUMBER_OF_QUESTIONS}:<span className='ml-2'>{currentValue}</span>
				</p>
			</div>
		)
	}
	return null
}
