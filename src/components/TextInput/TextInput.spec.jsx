import { render, screen } from '@testing-library/react';
import { TextInput } from '.';
import userEvent from '@testing-library/user-event';

describe('<TextInput />', () => {
  it('should have a value of searchValue', () => {
    const fn = jest.fn();
    render(<TextInput handleChange={fn} searchValue={'testando'} />);

    const input = screen.getByPlaceholderText(/type some word.../i);
    expect(input.value).toBe('testando');
  });
  it('should call handleChange function on each key pressed', () => {
    const fn = jest.fn();
    render(<TextInput handleChange={fn} searchValue={'um valor qualquer'} />);

    const input = screen.getByPlaceholderText(/type some word.../i);
    const value = 'o valor';

    userEvent.type(input, value);

    expect(input.value).toBe('um valor qualquer');
    expect(fn).toHaveBeenCalledTimes(value.length);
  });

  it('should match snapshot', () => {
    const fn = jest.fn();
    const { container } = render(<TextInput handleChange={fn} searchValue={'testando'} />);

    expect(container).toMatchSnapshot();
  });
});
