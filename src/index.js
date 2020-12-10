import "./assets/css/index.css";

import { App } from "dhx-optimus";
import Store from "dhx-optimus-store";

import { TopLayout } from "./views/TopLayout";

const initialState = {
	active: "first",
};

export class MyApp extends App {
	init() {
		this.store = new Store(initialState);
		this.params.store = this.store;
		this.state = this.store.getState();

		this.show(null, TopLayout);

		this.subscribe();
	}

	subscribe() {
		this.on("viewChange", id => {
			this.state.active = id;
		});
	}
}
