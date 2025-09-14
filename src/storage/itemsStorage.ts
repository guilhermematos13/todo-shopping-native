import { FiltersStatusEnum } from '@/components/Filters/constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ITEMS_STORAGE_KEY = '@purchased:items';

export type ItemStorage = {
  id: string;
  status: FiltersStatusEnum;
  description: string;
};

async function getItemsStorage(): Promise<ItemStorage[]> {
  try {
    const storage = await AsyncStorage.getItem(ITEMS_STORAGE_KEY);

    return storage ? JSON.parse(storage) : [];
  } catch (error) {
    throw new Error();
  }
}

async function getItemsByStatusStorage(status: FiltersStatusEnum) {
  const items = await getItemsStorage();

  return items.filter(item => item.status === status);
}

async function saveItemsStorage(items: ItemStorage[]): Promise<void> {
  try {
    await AsyncStorage.setItem(ITEMS_STORAGE_KEY, JSON.stringify(items));
  } catch (error) {
    throw new Error();
  }
}

async function addItemStorage(newItem: ItemStorage): Promise<ItemStorage[]> {
  const items = await getItemsStorage();
  const updatedItems = [...items, newItem];

  await saveItemsStorage(updatedItems);

  return updatedItems;
}

async function removeItemStorage(id: string): Promise<void> {
  const items = await getItemsStorage();
  const updatedItems = items.filter(item => item.id !== id);

  await saveItemsStorage(updatedItems);
}

async function removeAllItemsStorage(): Promise<void> {
  try {
    await AsyncStorage.removeItem(ITEMS_STORAGE_KEY);
  } catch (error) {
    throw new Error('Não foi possivel deletar');
  }
}

async function toggleStatus(id: string): Promise<void> {
  const items = await getItemsStorage();

  const updatedItems = items.map(item =>
    item.id === id
      ? {
          ...item,
          status:
            item.status === FiltersStatusEnum.PENDING
              ? FiltersStatusEnum.PURCHASED
              : FiltersStatusEnum.PENDING,
        }
      : item,
  );

  await saveItemsStorage(updatedItems);
}

export {
  getItemsStorage,
  getItemsByStatusStorage,
  saveItemsStorage,
  removeItemStorage,
  addItemStorage,
  removeAllItemsStorage,
  toggleStatus,
};
