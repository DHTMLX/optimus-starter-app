import "./assets/css/index.css";

import { App } from "dhx-optimus";

import { TopLayout } from "./views/TopLayout";

export class MyApp extends App {
	init() {
		this.show(null, TopLayout);
	}
}
