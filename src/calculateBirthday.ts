export const calculateBirthday = (
	birthDate: string,
): {
	years: number;
	months: number;
	days: number;
} => {
	const birth = new Date(birthDate);
	const today = new Date();

	let years = today.getFullYear() - birth.getFullYear();
	let months = today.getMonth() - birth.getMonth();
	let days = today.getDate() - birth.getDate();

	if (days < 0) {
		months--;
		const previousMonth = new Date(today.getFullYear(), today.getMonth(), 0);
		days += previousMonth.getDate();
	}

	if (months < 0) {
		years--;
		months += 12;
	}

	return { years, months, days };
};
