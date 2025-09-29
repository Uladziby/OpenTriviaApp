import type { QuestionsType } from '../../services/types'
import { CategoryListItem } from '../../shared/components/CategoryListItem/CategoryListItem'
import { WrapperSection } from '../../shared/components/WrapperSection/WrapperSection'
import { CATEGORIES } from '../../shared/utils/constants'
import { getUniqueTitles } from '../../shared/utils/getUniqueTitles'

export const CategoryList = ({
	items,
	onCategorySelect,
	selectedCategory
}: {
	items: QuestionsType[]
	onCategorySelect: (category: string) => void
	selectedCategory: string
}) => {
	const titles = getUniqueTitles(items)

	return (
		<WrapperSection title={CATEGORIES} wrapperClassname='row-span-2'>
			<ul className='w-full gap-5 flex flex-col'>
				{titles.map(title => (
					<CategoryListItem
						key={title}
						categoryTitle={title}
						onCategorySelect={onCategorySelect}
						isSelected={selectedCategory === title}
					/>
				))}
			</ul>
		</WrapperSection>
	)
}
