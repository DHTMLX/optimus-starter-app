import { View } from "dhx-optimus";

export class ToolbarView extends View {
	init() {
		return (this.toolbar = new dhx.Toolbar(null, {
			css: "toolbar",
			data: [
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
			],
		}));
	}

	ready() {
		this.observe(
			state => state.active,
			active => {
				this.toolbar.data.update(active, { active: true });
			}
		);

		this.toolbar.events.on("click", id => {
			this.fire("viewChange", [id]);
		});
	}
}
