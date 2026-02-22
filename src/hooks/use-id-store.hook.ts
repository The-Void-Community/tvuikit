import { useCallback, useRef } from "react";
import { useStore } from "./use-store.hook";

export const useIdStore = <Item>() => {
  const store = useStore<{
    id: string;
    item: Item;
  }>();

  const count = useRef<number>(0);

  const addItem = useCallback(
    (item: Item) => {
      const id = String(count.current);

      count.current++;

      return store.addItem({ id, item });
    },
    [store],
  );

  const getItem = useCallback(
    (id: string) => {
      return store.getItem(id)?.item;
    },
    [store],
  );

  return {
    ...store,
    addItem,
    getItem,
  } as const;
};
