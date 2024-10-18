import { Component, h } from '@stencil/core';

@Component({
  tag: 'child-component',
  styles: '.styled { color: green }',
  shadow: false,
  scoped: true
})
export class ChildComponent {
  render() {
    return <div class="styled">Child element</div>;
  }
}