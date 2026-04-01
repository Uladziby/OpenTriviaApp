import type { QuestionsType } from '../../services/types'

export const getUniqueTitles = (titles: QuestionsType[]) => {
	return Array.from(new Set(titles.map(title => title.category)))
}
