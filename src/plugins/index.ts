/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

// Plugins
import vuetify from "./vuetify";
import pinia from "./pinia";
import router from "../router";
import { CkeditorPlugin } from "@ckeditor/ckeditor5-vue";

// Types
import type { App } from "vue";

export function registerPlugins(app: App) {
  app.use(vuetify).use(router).use(pinia).use(CkeditorPlugin);
}
