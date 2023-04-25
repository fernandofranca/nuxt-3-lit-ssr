import {LitElement, html} from 'lit';
import {customElement} from 'lit/decorators.js';

const style = `
background: orange;
padding: 0.5rem;
`;

@customElement('my-element')
export default class MyElement extends LitElement {
  render() {
    return html`
      <div style="${style}">This is MyElement</div>
    `;
  }
}
