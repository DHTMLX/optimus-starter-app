import "./assets/css/index.css";

import { App } from "dhx-optimus";
import Store from "dhx-optimus-store";

import { TopLayout } from "./views/TopLayout";

import { data } from "./assets/data/data";

const initialState = {
	active: "first",
};

export class MyApp extends App {
	init() {
		this.store = new Store(initialState);
		this.params.store = this.store;
		this.state = this.store.getState();

		this.persons = new dhx.DataCollection();
		this.persons.parse(data);

		this.show(null, TopLayout, { persons: this.persons });

		this.subscribe();
	}

	subscribe() {
		this.on("viewChange", id => {
			this.state.active = id;
		});
	}
}
