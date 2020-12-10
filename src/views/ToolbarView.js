import { View } from "dhx-optimus";

export class ToolbarView extends View {
	init() {
		return (this.toolbar = new dhx.Toolbar(null, {
			css: "toolbar",
			data: [
				{
					type: "title",
					value: "DHTMLX Optimus Started Demo",
				},
				{
					type: "spacer",
				},
				{
					id: "first",
					value: "First",
					group: "views",
				},
				{
					id: "second",
					value: "Second",
					group: "views",
				},
				{
					id: "third",
					value: "Third",
					group: "views",
				},
				{
					type: "spacer",
				},
				{
					id: "remove",
					icon: "dxi dxi-delete",
					circle: true,
				},
				{
					id: "add",
					icon: "dxi dxi-plus",
					circle: true,
				},
			],
		}));
	}

	ready() {
		this.actionButtons = ["remove", "add"];

		this.observe(
			state => state.active,
			active => {
				this.showActionButtons();

				switch (active) {
					case "second":
						this.hideActionButtons();
						break;

					case "first":
						this.toolbar.disable("add");
						break;
				}

				this.toolbar.data.update(active, { active: true });
			}
		);

		this.toolbar.events.on("click", id => {
			switch (id) {
				case "first":
				case "second":
				case "third":
					this.fire("viewChange", [id]);
					break;
				case "remove":
					this.fire("removeItem", []);
					break;
				case "add":
					this.fire("addItem", []);
					break;
			}
		});
	}

	hideActionButtons() {
		this.toolbar.disable(this.actionButtons);
	}

	showActionButtons() {
		this.toolbar.enable(this.actionButtons);
	}
}
