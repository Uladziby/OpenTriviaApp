import type { QuestionsType } from '../../services/types'
import { countAmountCategories } from './countAmountCategories'

export const sortChartDataByCategory = (items: QuestionsType[]) => {
	const categoryCount = countAmountCategories(items)
	return Object.entries(categoryCount)
		.map(([category, count]) => ({
			category:
				category.length > 20 ? category.substring(0, 20) + '...' : category,
			fullCategory: category,
			count: count,
			percentage: ((count / items.length) * 100).toFixed(1)
		}))
		.sort((a, b) => b.count - a.count)
}
