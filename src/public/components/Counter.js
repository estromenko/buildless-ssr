import { useState } from "preact/hooks";
import { html } from "htm/preact";

export default function Counter({ defaultValue }) {
  const [counter, setCounter] = useState(defaultValue);

  function handleClick() {
    setCounter(counter + 1);
  }

  return html`
    <button type="button" onClick="${handleClick}">
      Counter: ${counter} ${counter % 2 == 0 && "!"}
    </button>
  `;
}
