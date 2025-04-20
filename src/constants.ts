export const TODAY = new Date();
export const MAX_DATE = TODAY.toISOString().split("T")[0];
export const MIN_DATE = new Date(
	TODAY.getFullYear() - 100,
	TODAY.getMonth(),
	TODAY.getDate(),
)
	.toISOString()
	.split("T")[0];
