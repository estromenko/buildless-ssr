import { html } from "htm/preact";
import Counter from "../components/Counter.js";

export default function Index({ counter }) {
  return html`
    <div>
      Index page
      <${Counter} defaultValue=${counter} />
      <a href="/contacts">Contacts page</a>
    </div>
  `;
}
