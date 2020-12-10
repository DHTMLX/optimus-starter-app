import { View } from "dhx-optimus";

export class DataView extends View {
	init() {
		return (this.dataView = new dhx.DataView(null, {
			keyNavigation: true,
			data: this.params.dataCollection,
			itemsInRow: 2,
			gap: 20,
			template: ({ name, post }) => `
				<div class="personal-card">
					<div class="personal-card__container">
						<h3>${name}</h3>
						<p>${post}</p>
					</div>
				</div>
			`,
		}));
	}

	ready() {
		this.on("removeItem", () => {
			const selected = this.dataView.selection.getItem();
			if (selected) {
				this.dataView.data.remove(selected.id);
			}
		});
	}
}
