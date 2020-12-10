import { View } from "dhx-optimus";

export class EmptyView extends View {
	init() {
		return `<div class="empty__container">This is ${this.params.content || "empty"} view</div>`;
	}
}
