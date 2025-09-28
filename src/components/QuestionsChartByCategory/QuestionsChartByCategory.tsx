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
import { ChartTooltip } from '../../shared/components/ChartTooltip/ChartTooltip'
import { useState } from 'react'
import { sortChartDataByCategory } from '../../shared/utils/sortChartDataByCategory'
import { getArrayOfColors } from '../../shared/utils/getArrayOfColors'

export const QuestionsChartByCategory = ({
	items
}: {
	items: QuestionsType[]
}) => {
	const [hoveredPieSlice, setHoveredPieSlice] = useState<number | null>(null)
	const chartData: ChartDataByCategory[] = sortChartDataByCategory(items)
	const colors: string[] = getArrayOfColors(chartData)

	return (
		<WrapperSection title={TITLE_CHART_BY_CATEGORY} classes='flex-col gap-2'>
			<ResponsiveContainer width='100%' height={500}>
				<PieChart>
					<Pie
						data={chartData}
						cx='50%'
						cy='50%'
						labelLine={false}
						label={({ category, percentage }) => {
							const percentNum = Number(percentage)
							return `${category} ${percentNum.toFixed(0)}%`
						}}
						outerRadius={hoveredPieSlice !== null ? 120 : 110}
						fill='#8884d8'
						dataKey='count'
						isAnimationActive={false}
						onMouseEnter={(__, index) => setHoveredPieSlice(index)}
						onMouseLeave={() => setHoveredPieSlice(null)}
					>
						{chartData.map((__, index) => {
							const isHovered = hoveredPieSlice === index
							return (
								<Cell
									key={`cell-${index}`}
									fill={colors[index]}
									stroke='#fff'
									strokeWidth={isHovered ? 3 : 2}
									style={{
										filter: isHovered
											? 'drop-shadow(0 8px 16px rgba(0,0,0,0.2)) brightness(1.1)'
											: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
										cursor: 'pointer',
										transform: isHovered ? 'scale(1.02)' : 'scale(1)',
										transformOrigin: 'center',
										transition: 'all 0.2s ease-in-out'
									}}
								/>
							)
						})}
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
						formatter={(__, entry: unknown) =>
							(entry as { payload: ChartDataByCategory }).payload.fullCategory
						}
						iconType='circle'
						layout='horizontal'
						align='center'
						wrapperStyle={{ fontSize: 12, marginTop: '80px' }}
					/>
				</PieChart>
			</ResponsiveContainer>
		</WrapperSection>
	)
}
