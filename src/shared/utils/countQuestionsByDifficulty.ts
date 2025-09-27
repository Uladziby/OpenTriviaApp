import type { QuestionsType } from '../../services/types'

export const countQuestionsByDifficulty = (
	questions: QuestionsType[]
): Record<string, number> => {
	const difficultyCount = questions.reduce(
		(acc: Record<string, number>, question) => {
			const difficulty = question.difficulty
			acc[difficulty] = (acc[difficulty] || 0) + 1
			return acc
		},
		{}
	)
	return difficultyCount
}
