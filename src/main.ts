import { calculateBirthday } from "./calculateBirthday";
import { MIN_DATE, TODAY, MAX_DATE } from "./constants";
import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
            <div class="">
              <h1>Age calculator</h1>
              <p>Calcute your age</p>
              <form class="form">
                <input type="date" class="input" min="${MIN_DATE}" max="${MAX_DATE}"/>
                <button type="submit">Calculate</button>
              </form>
            </div>
`;

const $form = document.querySelector("form");

if ($form) {
	$form.addEventListener("submit", (e) => {
		e.preventDefault();
		const $input = $form.querySelector<HTMLInputElement>("input[type='date']");
		// Validate input
		if (!$input || !$input.value) {
			alert("Please select a date");
			return;
		}

		// Check for valid date
		const $dateSelected = new Date($input?.value);
		if (isNaN($dateSelected.getTime())) {
			alert("Please select a valid date");
			return;
		}

		const age = calculateBirthday($input.value);
		alert(
			`You are ${age.years} years, ${age.months} months and ${age.days} days old`,
		);
	});
}
