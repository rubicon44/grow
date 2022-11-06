import { TaskIndex } from './index';
import { render } from '../../../../utils/test-utils';
import { screen } from '@testing-library/react';

describe('TaskIndex', () => {
  test('renders TaskIndex component', () => {
    render(<TaskIndex />);

    screen.debug();
  });
});