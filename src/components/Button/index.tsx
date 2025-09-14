import { Text, TouchableOpacity } from 'react-native';
import { ButtonStyles } from './styles';
import { ButtonProps } from './types';

export function Button({ title, ...props }: ButtonProps) {
  const { container, titleStyle } = ButtonStyles;

  return (
    <TouchableOpacity {...props} style={container}>
      <Text style={titleStyle}>{title}</Text>
    </TouchableOpacity>
  );
}
