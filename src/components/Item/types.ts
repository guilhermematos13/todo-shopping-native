import { FiltersStatusEnum } from '../Filters/constants';

export type ItemProps = {
  data: ItemData;
  onStatus: () => void;
  onRemove: () => void;
};

type ItemData = {
  status: FiltersStatusEnum;
  description: string;
};
