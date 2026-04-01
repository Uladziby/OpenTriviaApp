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
import { useState, useEffect } from 'react'
import { sortChartDataByCategory } from '../../shared/utils/sortChartDataByCategory'
import { getArrayOfColors } from '../../shared/utils/getArrayOfColors'

export const QuestionsChartByCategory = ({
	items
}: {
	items: QuestionsType[]
}) => {
	const [hoveredPieSlice, setHoveredPieSlice] = useState<number | null>(null)
	const [isMobile, setIsMobile] = useState(false)

	const chartData: ChartDataByCategory[] = sortChartDataByCategory(items)
	const colors: string[] = getArrayOfColors(chartData)

	useEffect(() => {
		const checkMobile = () => setIsMobile(window.innerWidth < 768)
		checkMobile()
		window.addEventListener('resize', checkMobile)
		return () => window.removeEventListener('resize', checkMobile)
	}, [])

	return (
		<WrapperSection
			title={TITLE_CHART_BY_CATEGORY}
			wrapperClassname='flex-col gap-2'
		>
			<ResponsiveContainer width='100%' height={isMobile ? 400 : 500}>
				<PieChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
					<Pie
						data={chartData}
						cx='50%'
						cy='50%'
						labelLine={false}
						label={
							isMobile
								? false
								: ({ category, percentage }) => {
										const percentNum = Number(percentage)
										return `${category} ${percentNum.toFixed(0)}%`
									}
						}
						outerRadius={hoveredPieSlice !== null ? 110 : 100}
						fill='#8884d8'
						dataKey='count'
						isAnimationActive={false}
						onMouseEnter={(__, index) => setHoveredPieSlice(index)}
						onMouseLeave={() => setHoveredPieSlice(null)}
						style={{ fontSize: 12 }}
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
										opacity: isHovered ? 0.8 : 1,
										transition: 'all 0.2s ease'
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
						wrapperStyle={{ fontSize: isMobile ? 11 : 12 }}
					/>
				</PieChart>
			</ResponsiveContainer>
		</WrapperSection>
	)
}
