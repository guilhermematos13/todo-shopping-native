import { TextInput } from 'react-native';
import { InputProps } from './types';
import { InputStyles } from './styles';

export function Input({ ...props }: InputProps) {
  const { inputContainer } = InputStyles;

  return <TextInput {...props} style={inputContainer} />;
}
