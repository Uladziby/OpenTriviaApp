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
	items,
	selectedCategory
}: {
	items: QuestionsType[]
	selectedCategory: string
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
			wrapperClassname='flex flex-col gap-3 md:gap-4 lg:gap-5'
			childrenClassname='flex flex-col md:flex-row gap-3 md:gap-4 lg:gap-5'
		>
			<ResponsiveContainer
				width='100%'
				height={400}
				className='flex sm:h-[350px] md:h-[400px] lg:h-[450px]'
			>
				<BarChart
					data={chartData}
					margin={{
						top: 20,
						right: 10,
						left: 0,
						bottom: 5
					}}
					className='sm:mr-5 md:mr-7 lg:mr-8'
				>
					<CartesianGrid
						strokeDasharray='3 3'
						stroke='#f0f0f0'
						className='opacity-50 md:opacity-75'
					/>
					<XAxis
						dataKey='difficulty'
						tick={{ fontSize: 10 }}
						className='text-xs sm:text-sm'
						axisLine={{ stroke: '#d1d5db' }}
					/>
					<YAxis
						dataKey={'count'}
						tick={{ fontSize: 10 }}
						className='text-xs sm:text-sm'
						axisLine={{ stroke: '#d1d5db' }}
						label={{
							value: 'Number of Questions',
							angle: -90,
							position: 'insideLeft',
							style: { fontSize: 11 }
						}}
					/>
					<Legend
						wrapperStyle={{ fontSize: '12px' }}
						className='text-xs sm:text-sm'
					/>
					<Bar
						dataKey='count'
						name={selectedCategory ? `${selectedCategory}` : 'All Categories'}
						fill='#7448ff'
						radius={[4, 4, 0, 0]}
						maxBarSize={60}
						className='sm:max-w-[70px] md:max-w-[80px]'
					>
						{items.map((__, index) => (
							<Cell key={`cell-${index}`} />
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
