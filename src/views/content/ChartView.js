import { View } from "dhx-optimus";
import { getChartStatistic } from "../../assets/data/data";

export class ChartView extends View {
	init() {
		return new dhx.Chart(null, {
			css: "chart",
			type: "donut",
			series: [
				{
					value: "value",
					color: "color",
					text: "post",
				},
			],
			legend: {
				values: {
					id: "id",
					text: "post",
					color: "color",
				},
				halign: "center",
				valign: "bottom",
			},
			data: getChartStatistic(),
		});
	}
}
