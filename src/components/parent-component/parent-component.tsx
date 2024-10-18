import { Component, h } from '@stencil/core';

@Component({
  tag: 'parent-component',
  styles: '.styled { color: red }',
  shadow: false,
  scoped: true
})
export class ParentComponent {
  render() {
    return <div>
      <div class="styled">Parent element</div>
      <child-component></child-component>
    </div>;
  }
}