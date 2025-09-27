import { type ReactNode } from 'react'

export const WrapperSection = ({ children }: { children: ReactNode }) => {
	return (
		<div className='w-full rounded-lg border-white p-8 bg-secondary border-2'>
			{children}
		</div>
	)
}
