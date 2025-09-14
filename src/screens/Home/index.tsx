import { Image, Text, TouchableOpacity, View } from 'react-native';
import { homeStyles } from './styles';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { Filters } from '@/components/Filters';
import { FiltersStatusEnum } from '@/components/Filters/constants';
import { Item } from '@/components/Item';

const FILTER_OPTIONS: FiltersStatusEnum[] = [
  FiltersStatusEnum.PENDING,
  FiltersStatusEnum.PURCHASED,
];

export function Home() {
  const {
    container,
    logo,
    formContainer,
    content,
    header,
    clearButton,
    clearText,
  } = homeStyles;

  return (
    <View style={container}>
      <Image style={logo} source={require('@/assets/logo.png')} />
      <View style={formContainer}>
        <Input placeholder="O que você precisa comprar?" />
        <Button title="Adicionar" />
      </View>
      <View style={content}>
        <View style={header}>
          {FILTER_OPTIONS.map(filterStatus => (
            <Filters key={filterStatus} status={filterStatus} isActive />
          ))}
          <TouchableOpacity style={clearButton}>
            <Text style={clearText}>Limpar</Text>
          </TouchableOpacity>
        </View>
        <Item
          data={{ description: 'Café', status: FiltersStatusEnum.PENDING }}
          onRemove={() => {}}
          onStatus={() => {}}
        />
      </View>
    </View>
  );
}
