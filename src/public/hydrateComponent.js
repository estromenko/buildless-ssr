import { h } from "htm/preact";
import { hydrate } from "preact";

export default function hydrateComponent(component) {
  if (typeof window !== "undefined") {
    const propsStr = document.querySelector("#hydration-data").innerHTML;
    const props = JSON.parse(propsStr);
    hydrate(h(component, props[component.name]), document.body);
  }
}
