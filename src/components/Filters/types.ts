import { TouchableOpacityProps } from 'react-native';
import { FiltersStatusEnum } from './constants';

export type FiltersProps = TouchableOpacityProps & {
  status: FiltersStatusEnum;
  isActive: boolean;
};
