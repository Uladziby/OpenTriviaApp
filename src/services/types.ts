export type ResponseOpenTrivia = {
	response_code: number
	results: QuestionsType[]
}

export type QuestionsType = {
	type: 'multiple' | 'boolean'
	difficulty: 'easy' | 'medium' | 'hard'
	category: string
	question: string
	correct_answer: string
	incorrect_answers: string[]
}
