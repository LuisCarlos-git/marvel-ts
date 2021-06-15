import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithTheme } from '../../utils/renderWithTheme';

import FieldText from '.';

describe('<FieldText', () => {
  it('should render input text', () => {
    renderWithTheme(<FieldText />);

    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('should render input label', () => {
    renderWithTheme(
      <form>
        <FieldText label="label" labelId="labelid" />
      </form>
    );

    expect(screen.getByLabelText(/label/i)).toBeInTheDocument();
  });
});