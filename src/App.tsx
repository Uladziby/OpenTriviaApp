import { useEffect, useMemo, useState } from 'react'
import { CategoryList } from './components/CategoryList/CategoryList'
import { fetchData } from './services/fetchData'
import type { QuestionsType } from './services/types'
import { QuestionsChartByDifficulty } from './components/QuestionsChartByDifficulty/QuestionsChartByDifficulty'
import { QuestionsChartByCategory } from './components/QuestionsChartByCategory/QuestionsChartByCategory'
import { TOTAL_QUESTIONS } from './shared/utils/constants'

function App() {
	const [data, setData] = useState<QuestionsType[]>([])
	const [chosenCategory, setChosenCategory] = useState<string>('')

	const filteredData = useMemo(() => {
		if (!chosenCategory) {
			return data
		}
		return data.filter(item => item.category === chosenCategory)
	}, [data, chosenCategory])

	useEffect(() => {
		fetchData(TOTAL_QUESTIONS).then(data => {
			setData(data)
		})
	}, [])

	const handleCategoryChange = (category: string) => {
		if (category === chosenCategory) {
			setChosenCategory('')
			return
		}
		setChosenCategory(category)
	}

	return (
		<div className='container mx-auto my-10 w-full grid md:grid-cols-[0.7fr_2.3fr] grid-cols-1 grid-rows-2  gap-4'>
			<CategoryList
				items={data}
				onCategorySelect={handleCategoryChange}
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
