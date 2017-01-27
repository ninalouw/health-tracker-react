import { renderComponent, expect } from '../helper.test';
import App from '../../src/components/app';

describe('App', () => {
  let component;
  beforeEach(() => {
    component = renderComponent(App);
  });
  it('shows the app div', () => {
    expect(component).to.have.class('app');
  });
});
