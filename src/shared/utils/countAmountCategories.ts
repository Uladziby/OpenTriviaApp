import type { QuestionsType } from '../../services/types'

export const countAmountCategories = (items: QuestionsType[]) => {
	return items.reduce(
		(acc, question) => {
			const category = question.category
			acc[category] = (acc[category] || 0) + 1
			return acc
		},
		{} as Record<string, number>
	)
}
