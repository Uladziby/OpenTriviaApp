import {
	Cell,
	Legend,
	Pie,
	PieChart,
	ResponsiveContainer,
	Tooltip
} from 'recharts'
import { WrapperSection } from '../../shared/components/WrapperSection/WrapperSection'
import { TITLE_CHART_BY_CATEGORY } from '../../shared/utils/constants'
import type { QuestionsType } from '../../services/types'
import type { ChartDataByCategory } from './types'
import { generateRandomColor } from '../../shared/utils/generateRandomColor'
import { ChartTooltip } from '../../shared/components/ChartTooltip/ChartTooltip'

export const QuestionsChartByCategory = ({
	items
}: {
	items: QuestionsType[]
}) => {
	const categoryCount: Record<string, number> = items.reduce(
		(acc, question) => {
			const category = question.category
			acc[category] = (acc[category] || 0) + 1
			return acc
		},
		{} as Record<string, number>
	)

	const chartData: ChartDataByCategory[] = Object.entries(categoryCount)
		.map(([category, count]) => ({
			category:
				category.length > 20 ? category.substring(0, 20) + '...' : category,
			fullCategory: category,
			count: count,
			percentage: ((count / items.length) * 100).toFixed(1)
		}))
		.sort((a, b) => b.count - a.count)

	const colors: string[] = chartData.map((_, index) =>
		generateRandomColor(index, chartData.length)
	)

	return (
		<WrapperSection title={TITLE_CHART_BY_CATEGORY}>
			<ResponsiveContainer width='100%' height={400}>
				<PieChart>
					<Pie
						data={chartData}
						cx='50%'
						cy='50%'
						labelLine={false}
						label={props => `${props.percentage}%`}
						outerRadius={120}
						fill='#8884d8'
						dataKey='count'
					>
						{chartData.map((entry, index) => (
							<Cell key={`cell-${index}`} fill={colors[index]} />
						))}
					</Pie>
					<Tooltip
						content={props => (
							<ChartTooltip
								{...{
									...props,
									label:
										typeof props.label === 'number'
											? String(props.label)
											: props.label
								}}
							/>
						)}
					/>
					<Legend
						formatter={(value: string, entry: unknown) =>
							(entry as { payload: ChartDataByCategory }).payload.fullCategory
						}
						wrapperStyle={{ fontSize: '12px' }}
					/>
				</PieChart>
			</ResponsiveContainer>
		</WrapperSection>
	)
}
