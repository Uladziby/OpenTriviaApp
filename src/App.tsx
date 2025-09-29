import { useEffect, useMemo, useState } from 'react'
import { CategoryList } from './components/CategoryList/CategoryList'
import { fetchData } from './services/fetchData'
import type { QuestionsType } from './services/types'
import { QuestionsChartByDifficulty } from './components/QuestionsChartByDifficulty/QuestionsChartByDifficulty'
import { QuestionsChartByCategory } from './components/QuestionsChartByCategory/QuestionsChartByCategory'
import { ALL_CATEGORIES, TOTAL_QUESTIONS } from './shared/utils/constants'

function App() {
	const [data, setData] = useState<QuestionsType[]>([])
	const [chosenCategory, setChosenCategory] = useState<string>(
		ALL_CATEGORIES.category
	)

	const filteredData = useMemo(() => {
		if (!chosenCategory || chosenCategory === ALL_CATEGORIES.category) {
			return data
		}
		return data.filter(item => item.category === chosenCategory)
	}, [data, chosenCategory])

	useEffect(() => {
		fetchData(TOTAL_QUESTIONS).then(data => {
			setData([ALL_CATEGORIES, ...data])
		})
	}, [])

	return (
		<div className='container mx-auto my-10 w-full grid md:grid-cols-[0.7fr_2.3fr] grid-cols-1 grid-rows-2  gap-4'>
			<CategoryList
				items={data}
				onCategorySelect={setChosenCategory}
				selectedCategory={chosenCategory}
			/>
			<QuestionsChartByDifficulty
				items={filteredData}
				selectedCategory={chosenCategory}
			/>
			<QuestionsChartByCategory items={filteredData} />
		</div>
	)
}

export default App
