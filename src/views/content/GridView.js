import { View } from "dhx-optimus";
import { emptyItem } from "../../assets/data/data";

export class GridView extends View {
	init() {
		const postUniq = this.params.dataCollection
			.map(item => {
				return item.post;
			})
			.filter((value, index, self) => {
				return self.indexOf(value) === index;
			});

		this.grid = new dhx.Grid(null, {
			columns: [
				{ id: "name", header: [{ text: "Name" }] },
				{ id: "post", header: [{ text: "Post" }], editorType: "select", options: postUniq },
				{ id: "phone", header: [{ text: "Phone" }] },
				{ id: "mail", header: [{ text: "Mail" }] },
				{ id: "birthday", header: [{ text: "Birthday" }], type: "date", dateFormat: "%d.%m.%Y" },
				{ id: "start", header: [{ text: "Start" }], type: "date", dateFormat: "%d.%m.%Y" },
			],
			autoWidth: true,
			selection: "row",
			editable: true,
			data: this.params.dataCollection,
		});

		this.on("removeItem", () => {
			const selected = this.grid.selection.getCell();
			if (selected) {
				this.grid.data.remove(selected.row.id);
			}
		});

		this.on("addItem", () => {
			const selected = this.grid.selection.getCell();
			if (selected) {
				this.grid.data.add({ ...emptyItem }, this.grid.data.getIndex(selected.row.id) + 1);
			} else {
				this.grid.data.add({ ...emptyItem }, 0);
			}
		});

		return this.grid;
	}
}
