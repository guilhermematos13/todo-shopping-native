import {
  Alert,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { homeStyles } from './styles';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { Filters } from '@/components/Filters';
import { FiltersStatusEnum } from '@/components/Filters/constants';
import { Item } from '@/components/Item';
import { useEffect, useState } from 'react';
import {
  addItemStorage,
  getItemsByStatusStorage,
  getItemsStorage,
  ItemStorage,
  removeAllItemsStorage,
  removeItemStorage,
  toggleStatus,
} from '@/storage/itemsStorage';

const FILTER_OPTIONS: FiltersStatusEnum[] = [
  FiltersStatusEnum.PENDING,
  FiltersStatusEnum.PURCHASED,
];

export function Home() {
  const [items, setItems] = useState<ItemStorage[]>([]);
  const [descriptionState, setDescriptionState] = useState('');
  const [filterStatusState, setFilterStatusState] = useState(
    FiltersStatusEnum.PENDING,
  );
  const {
    container,
    logo,
    separator,
    listContent,
    emptyList,
    formContainer,
    content,
    header,
    clearButton,
    clearText,
  } = homeStyles;

  async function addItem() {
    if (!descriptionState.trim()) {
      return Alert.alert('Adicionar', 'Informe a descrição para adicionar');
    }

    const newItem = {
      id: Math.random().toString(36).substring(2),
      description: descriptionState,
      status: FiltersStatusEnum.PENDING,
    };

    await addItemStorage(newItem);

    await getItemsByStatus();

    Alert.alert('Adicionado', `Adicionado ${descriptionState}.`);
    setDescriptionState('');
    setFilterStatusState(FiltersStatusEnum.PENDING);
  }

  async function handleDeleteItem(id: string) {
    try {
      await removeItemStorage(id);
      await getItemsByStatus();
    } catch (error) {
      throw new Error('Não foi possível remover');
    }
  }

  async function getItemsByStatus() {
    try {
      const response = await getItemsByStatusStorage(filterStatusState);

      setItems(response);
    } catch (error) {
      console.log(error);
      Alert.alert('Erro', 'Não foi possível filtrar os itens');
    }
  }

  async function onClearItems() {
    try {
      await removeAllItemsStorage();
      setItems([]);
    } catch (error) {
      throw new Error('Não foi possivel remover os items');
    }
  }

  async function handleToggleItemStatus(id: string) {
    try {
      await toggleStatus(id);
      await getItemsByStatus();
    } catch (error) {
      throw new Error('Não foi possivel atualizar o status');
    }
  }

  function handleClear() {
    Alert.alert('Limpar', 'Deseja remover todos?', [
      { text: 'Não', style: 'cancel' },
      { text: 'Sim', onPress: () => onClearItems() },
    ]);
  }

  useEffect(() => {
    getItemsByStatus();
  }, [filterStatusState]);

  return (
    <View style={container}>
      <Image style={logo} source={require('@/assets/logo.png')} />
      <View style={formContainer}>
        <Input
          placeholder="O que você precisa comprar?"
          onChangeText={setDescriptionState}
          value={descriptionState}
        />
        <Button title="Adicionar" onPress={addItem} />
      </View>
      <View style={content}>
        <View style={header}>
          {FILTER_OPTIONS.map(filterStatus => (
            <Filters
              key={filterStatus}
              status={filterStatus}
              isActive={filterStatus === filterStatusState}
              onPress={() => setFilterStatusState(filterStatus)}
            />
          ))}
          <TouchableOpacity style={clearButton} onPress={handleClear}>
            <Text style={clearText}>Limpar</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={items}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <Item
              data={item}
              onRemove={() => handleDeleteItem(item.id)}
              onStatus={() => handleToggleItemStatus(item.id)}
            />
          )}
          ItemSeparatorComponent={() => <View style={separator} />}
          contentContainerStyle={listContent}
          ListEmptyComponent={() => (
            <Text style={emptyList}>Nenhum item aqui.</Text>
          )}
        />
      </View>
    </View>
  );
}
