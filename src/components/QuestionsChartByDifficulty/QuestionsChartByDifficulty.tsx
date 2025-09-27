import {
	Bar,
	BarChart,
	CartesianGrid,
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

export const QuestionsChartByDifficulty = ({
	items
}: {
	items: QuestionsType[]
}) => {
	const numberOfQuestions = countQuestionsByDifficulty(items)

	const chartData = Object.entries(numberOfQuestions).map(
		([difficulty, count]) => ({
			difficulty: difficulty.charAt(0).toUpperCase() + difficulty.slice(1),
			count: count,
			percentage: ((count / items.length) * 100).toFixed(1)
		})
	)

	return (
		<WrapperSection>
			<div className='text-xl font-bold text-primary'>
				{TITLE_CHART_BY_DIFFICULTY}
			</div>
			<div className='w-full h-96'>
				<ResponsiveContainer>
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
						/>
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
							cursor={{ stroke: '#FFD600', strokeWidth: 1 }}
						/>
					</BarChart>
				</ResponsiveContainer>
			</div>
			<div className='mt-6 grid grid-cols-1 md:grid-cols-3 gap-4'>
				{chartData.map(item => (
					<div key={item.difficulty} className='bg-gray-50 p-4 rounded-lg'>
						<h3 className='font-semibold text-lg text-secondary'>
							{item.difficulty}
						</h3>
						<p className='text-2xl font-bold text-primary'>{item.count}</p>
						<p className='text-sm text-gray-600'>{item.percentage}% of total</p>
					</div>
				))}
			</div>
		</WrapperSection>
	)
}
