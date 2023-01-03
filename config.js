const questions = [
// Personal details
['Last Name', 'user-last-name', true, 'input'],
['Phone Number', 'user-phone-number', true, 'input'],
['Email Address', 'user-mail-address', true, 'input'],
['Permanent Address', 'user-permanent-address', true, 'input'],
['Experian credit score', 'user-credit-score', false, 'input'],

// Education details
['Education', 'user-education-qualification', true, 'select', false, ['12th', 'Diploma', 'Graduation', 'Post Graduation']],
['Field of education', 'user-education-field', true, 'input'],
['College name', 'user-college-field', true, 'input'],

// Preferences
['Sunrise or Sunset?', 'user-sun-preference', true, 'select', false, ['Sunrise', 'Sunset']],
['Hindi Movies or English Movies?', 'user-movie-preference', true, 'select', false, ['Hindi Movies', 'English Movies']],
['Veg or Non-Veg?', 'user-food-preference', true, 'select', false, ['Veg food', 'Non-veg food']],
['Beach or Mountain?', 'user-travel-preference', true, 'select', false, ['Beach', 'Mountains']],
['Reading or watching TV?', 'user-read-tv-preference', true, 'select', false, ['Read books', 'Watch TV']],
['Apple phone or Android phone?', 'user-phone-preference', true, 'select', false, ['Apple', 'Android']],
['Weekend at home or Weekend roaming around?', 'user-weekend-preference', true, 'select', false, ['At home', 'Explore places']],
['Early riser or night owl?', 'user-sleep-preference', true, 'select', false, ['Early bird', 'Night owl']],

// Lifestyle
['Sleep schedule', 'user-sleep-schedule-field', true, 'input'],
['Can you sleep with lights on?', 'user-existing-medical-condition', true, 'select', false, ['Yes', 'No']],
['Weekday routine', 'user-weekday-schedule-field', true, 'input'],
['Weekend routine', 'user-weekend-schedule-field', true, 'input'],
['Do you workout? If yes, what\'s the frequency?', 'user-workout-field', true, 'input'],
['Office timings', 'user-office-timing-field', true, 'input'],
['Do you Drink or Smoke?', 'user-drink-preference', true, 'select', false, ['Not at all', 'Occasionally', 'Frequently']],
['Favourite holiday destination', 'user-holiday-dest', true, 'input'],

// Marriage expectations
['Do you believe in the custom of dowry', 'user-dowry-belief', true, 'select', false, ['Yes', 'No']],
['How much do you think one should spend on marriage?', 'user-marriage-expense-belief', true, 'input'],
['What according to you is the best age to get married?', 'user-marriage-age-belief', true, 'input'],
['What according to you is the best age to have children?', 'user-children-age-belief', true, 'input'],
['Which city would you like to live in after marriage?', 'user-city-age-belief', true, 'input'],

// Honeymoon expectations
['Preffered honeymoon destination', 'user-honeymoon-preference', true, 'select', false, ['Goa', 'Manali', 'Bali', 'Maldives', 'Switzerland']],

// Work details
['Where do you currently work?', 'user-work-place-field', true, 'input'],
['What is the basic salary?', 'user-basic-salary-field', true, 'input'],
['Do you have a passport?', 'user-passport-preference', true, 'select', false, ['Yes', 'No']],
['What is the office leave policy? How many paid leaves are there?', 'user-office-leave-policy', true, 'input'],
['Do you have life insurance?', 'user-life-insurance-belief', true, 'select', false, ['Yes', 'No']],
['Do you have Term life insurance?', 'user-term-life-insurance-belief', true, 'select', false, ['Yes', 'No']],
['Do you invest in mutual funds?', 'user-mutual-funds-belief', true, 'select', false, ['Yes', 'No']],
['Do you invest in stocks?', 'user-stocks-belief', true, 'select', false, ['Yes', 'No']],
['Do you have any existing loan?', 'user-existing-loan-belief', true, 'select', false, ['Yes', 'No']],

// Medical history
['Do you have any existing medical condition? If yes, what is it?', 'user-existing-medical-condition', true, 'input']

];


const sample_questions = [
['Last Name', 'user-last-name', true, 'input'],
['Sample single select option', 'sample-single-option', true, 'select', false, ['Option1', 'option2']],
['Sample multi select option', 'sample-multi-option', true, 'select', true, ['Option1', 'option2','Option1', 'option2']],
['Sample multi select option2', 'sample-multi-option2', true, 'select', true, ['woah', 'option2','Option1', 'option2']],

];

const questionConfig = questions.map(question => {
	return {
		label: question[0],
		id: question[1],
		class: 'col-md-12',
		required: question[2],
		'aria-label': question[0],
		readonly: false,
		type: question[3],
		dataType: 'text',
		pdfField: question[0],
		multiple: question[4],
		options: question.length === 6 ? ['--select--', ...question[5]]: undefined
	};
});

