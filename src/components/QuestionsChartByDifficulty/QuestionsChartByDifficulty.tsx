import {
	Bar,
	BarChart,
	CartesianGrid,
	Cell,
	Legend,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis
} from 'recharts'
import { WrapperSection } from '../../shared/components/WrapperSection/WrapperSection'
import type { QuestionsType } from '../../services/types'
import { countQuestionsByDifficulty } from '../../shared/utils/countQuestionsByDifficulty'
import { ChartTooltip } from '../../shared/components/ChartTooltip/ChartTooltip'
import { TITLE_CHART_BY_DIFFICULTY } from '../../shared/utils/constants'
import type { ChartData } from './types'
import { StatisticsChart } from './StatisticsChart'

export const QuestionsChartByDifficulty = ({
	items
}: {
	items: QuestionsType[]
}) => {
	const numberOfQuestions = countQuestionsByDifficulty(items)

	const chartData: ChartData[] = Object.entries(numberOfQuestions).map(
		([difficulty, count]) => ({
			difficulty: difficulty.charAt(0).toUpperCase() + difficulty.slice(1),
			count: count,
			percentage: ((count / items.length) * 100).toFixed(1)
		})
	)

	return (
		<WrapperSection
			title={TITLE_CHART_BY_DIFFICULTY}
			classes='flex flex-row gap-2'
		>
			<ResponsiveContainer width='100%' height={400}>
				<BarChart
					data={chartData}
					margin={{
						top: 20,
						right: 30,
						left: 20,
						bottom: 5
					}}
				>
					<CartesianGrid strokeDasharray='3 3' stroke='#f0f0f0' />
					<XAxis
						dataKey='difficulty'
						tick={{ fontSize: 12 }}
						axisLine={{ stroke: '#d1d5db' }}
					/>
					<YAxis
						dataKey={'count'}
						tick={{ fontSize: 12 }}
						axisLine={{ stroke: '#d1d5db' }}
						label={{
							value: 'Number of Questions',
							angle: -90,
							position: 'insideLeft'
						}}
					/>
					<Legend />
					<Bar
						dataKey='count'
						name='Difficulty'
						fill='#7448ff'
						radius={[4, 4, 0, 0]}
					>
						{items.map((entry, index) => (
							<Cell key={`cell-${index}`} style={{ cursor: 'pointer' }} />
						))}
					</Bar>
					<Tooltip
						wrapperStyle={{ outline: 'none' }}
						content={props => (
							<ChartTooltip
								{...props}
								label={
									typeof props.label === 'number'
										? String(props.label)
										: props.label
								}
							/>
						)}
						cursor={{ fill: 'rgba(237, 231, 231, 0.2)' }}
					/>
				</BarChart>
			</ResponsiveContainer>
			<StatisticsChart chartData={chartData} />
		</WrapperSection>
	)
}
