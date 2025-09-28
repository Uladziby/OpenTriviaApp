import { type ReactNode } from 'react'

export const WrapperSection = ({
	children,
	title,
	classes,
	childrenClasses
}: {
	children: ReactNode
	title: string
	classes?: string
	childrenClasses?: string
}) => {
	return (
		<div className={`w-full rounded-lg p-8 bg-secondary ${classes}`}>
			<div className='text-xl font-bold text-primary mb-6'>{title}</div>
			<div className={childrenClasses}>{children}</div>
		</div>
	)
}
