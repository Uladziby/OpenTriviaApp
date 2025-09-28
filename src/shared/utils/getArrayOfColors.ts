import type { ChartDataByCategory } from '../../components/QuestionsChartByCategory/types'
import { generateRandomColor } from './generateRandomColor'

export const getArrayOfColors = (
	chartData: ChartDataByCategory[]
): string[] => {
	return chartData.map((_, index) => {
		if (chartData.length === 1) {
			return '#7448ff'
		}
		return generateRandomColor(index, chartData.length)
	})
}
