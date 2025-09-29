import type { QuestionsType } from '../../services/types'

export const CATEGORIES = ' Categories'
export const TITLE_CHART_BY_DIFFICULTY =
	'Distribution of Questions by Difficulty'
export const TITLE_CHART_BY_CATEGORY = 'Distribution of Questions by Category'
export const NUMBER_OF_QUESTIONS = 'Number of questions'

export const TOTAL_QUESTIONS = 50

export const ALL_CATEGORIES: QuestionsType = {
	category: 'All Categories',
	correct_answer: '',
	difficulty: 'hard',
	incorrect_answers: [],
	type: 'multiple',
	question: ''
}
