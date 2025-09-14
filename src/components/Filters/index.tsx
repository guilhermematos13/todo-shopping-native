import { Text, TouchableOpacity } from 'react-native';
import { FiltersProps } from './types';
import { FiltersStatusEnum } from './constants';
import { FiltersStyles } from './styles';
import { CircleDashed, CircleCheck } from 'lucide-react-native';

export function Filters({ status, isActive, ...props }: FiltersProps) {
  const { container, textStyle } = FiltersStyles;

  return (
    <TouchableOpacity
      style={[container, { opacity: isActive ? 1 : 0.5 }]}
      activeOpacity={0.8}
      {...props}
    >
      {status === FiltersStatusEnum.PURCHASED ? (
        <CircleCheck size={18} color={'#2C46B1'} />
      ) : (
        <CircleDashed size={18} color={'#000000'} />
      )}
      <Text style={textStyle}>
        {status === FiltersStatusEnum.PURCHASED ? 'Comprados' : 'Pendentes'}
      </Text>
    </TouchableOpacity>
  );
}
