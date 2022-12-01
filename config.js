const questionConfig = [
	{
		label: 'Last Name',
		id: 'user-last-name',
		class: 'col-md-12',
		required: true,
		'aria-label': 'Last Name...',
		readonly: false,
		type: 'input',
		dataType: 'text',
		pdfField: 'Last Name'
	},
	{
		label: 'Sample single select option',
		id: 'sample-single-option',
		class: 'col-md-12',
		required: true,
		'aria-label': 'Single option',
		readonly: false,
		type: 'select',
		multiple: false,
		dataType: 'text',
		options: ['Option1', 'option2'],
		pdfField: 'Sample single select option'
	},
	{
		label: 'Sample multi select option',
		id: 'sample-multi-option',
		class: 'col-md-12',
		required: true,
		'aria-label': 'Multi option',
		readonly: false,
		type: 'select',
		multiple: true,
		dataType: 'text',
		options: ['Option1', 'option2','Option1', 'option2'],
		pdfField: 'Sample multi select option'
	},
]
