import { View } from "dhx-optimus";

export class GridView extends View {
	init() {
		return new dhx.Grid(null, {
			columns: [
				{ id: "name", header: [{ text: "Name" }] },
				{ id: "post", header: [{ text: "Post" }] },
				{ id: "phone", header: [{ text: "Phone" }] },
				{ id: "mail", header: [{ text: "Mail" }] },
				{ id: "birthday", header: [{ text: "Birthday" }], type: "date" },
				{ id: "start", header: [{ text: "Start" }], type: "date" },
			],
			autoWidth: true,
			data: this.params.dataCollection,
		});
	}
}
