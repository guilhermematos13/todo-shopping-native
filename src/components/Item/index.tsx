import { View, TouchableOpacity, Text } from 'react-native';
import { ItemProps } from './types';
import { FiltersStatusEnum } from '../Filters/constants';
import { CircleCheck, CircleDashed, Trash2 } from 'lucide-react-native';
import { ItemStyles } from './styles';

export function Item({ data, onRemove, onStatus }: ItemProps) {
  const { container, description } = ItemStyles;

  return (
    <View style={container}>
      <TouchableOpacity onPress={onStatus}>
        {data.status === FiltersStatusEnum.PURCHASED ? (
          <CircleCheck size={18} color={'#2C46B1'} />
        ) : (
          <CircleDashed size={18} color={'#000000'} />
        )}
      </TouchableOpacity>
      <Text style={description}>{data.description}</Text>

      <TouchableOpacity onPress={onRemove}>
        <Trash2 size={18} color={'#828282'} />
      </TouchableOpacity>
    </View>
  );
}
