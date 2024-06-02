import { h } from "htm/preact";
import renderToString from "preact-render-to-string";
import { readFileSync } from "fs";

const template = readFileSync("./src/public/index.html").toString();

export default function renderComponent(component, props) {
  const renderedComponent = renderToString(h(component, props));

  const hydrationProps = {};
  hydrationProps[component.name] = props;

  const hydrationPropsStr = JSON.stringify(hydrationProps);
  const html = template
    .replace("#CONTENT", renderedComponent)
    .replace("#PROPS", hydrationPropsStr)
    .replaceAll("#COMPONENT_NAME", component.name);

  return html;
}
