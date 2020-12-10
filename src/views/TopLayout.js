import { View } from "dhx-optimus";

import { ToolbarView } from "./ToolbarView";
import { EmptyView } from "./EmptyView";

export class TopLayout extends View {
	init() {
		return (this.layout = new dhx.Layout(null, {
			rows: [
				{
					id: "toolbar",
					height: "content",
					init: cell => this.show(cell, ToolbarView),
				},
				{
					id: "content"
				},
			],
		}));
	}

	ready() {
		this.observe(
			state => state.active,
			active => {
				this.show(this.layout.getCell("content"), EmptyView, { content: active });
			}
		);
	}
}
