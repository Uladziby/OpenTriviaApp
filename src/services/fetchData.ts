import type { QuestionsType, ResponseOpenTrivia } from './types'

export const URL = 'https://opentdb.com/api.php?amount='

export const fetchData = async (
	amountOfQuestions: number
): Promise<QuestionsType[]> => {
	const response = await fetch(`${URL}${amountOfQuestions}`)
	if (!response.ok) {
		throw new Error('Network response was not ok')
	}
	const data: ResponseOpenTrivia = await response.json()
	console.log(data.results, 'data from fetch')
	return data.results
}
