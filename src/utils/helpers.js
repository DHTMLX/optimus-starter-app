export function getChartStatistic(data) {
    if (!data) return;
    const dataset = [ ...data ];
	const state = [];
	const counter = {};
	const color = [
		"#ffffc0",
		"#ff916b",
		"#ff4169",
		"#863958",
		"#84bec3",
		"#ffff9c",
		"#ff7657",
		"#f93555",
		"#6d2e47",
		"#6b9a9e",
	];

	dataset.forEach(({ post }) => {
		if (!counter[post]) {
			counter[post] = 1;
		} else {
			++counter[post];
		}
	});

	Object.entries(counter).forEach(([post, value], id) => {
		state.push({
			id,
			value,
			post,
			color: color[id],
		});
	});

	return state;
}