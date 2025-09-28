export const CategoryListItem = ({
	categoryTitle,
	onCategorySelect,
	isSelected
}: {
	categoryTitle: string
	onCategorySelect: (category: string) => void
	isSelected: boolean
}) => {
	return (
		<li
			className={`cursor-pointer list-none rounded-lg hover:bg-primary  ${isSelected ? 'bg-primary' : 'bg-secondary-light'}`}
		>
			<button
				className='cursor-pointer grid h-12 w-full place-items-center text-white text-sm hover:shadow-md text-p'
				onClick={() => onCategorySelect(categoryTitle)}
			>
				{categoryTitle}
			</button>
		</li>
	)
}
