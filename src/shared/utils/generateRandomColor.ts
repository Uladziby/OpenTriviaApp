export const generateRandomColor = (index: number, total: number): string => {
	const hue = (index * 360) / total
	const saturation = 65 + (index % 3) * 10
	const lightness = 55 + (index % 2) * 10
	return `hsl(${hue}, ${saturation}%, ${lightness}%)`
}
