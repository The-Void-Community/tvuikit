import { useCallback, useState } from "react";
import { useExtendedStore } from "./use-extended-store.hook";

export const useStore = <Item extends { id: string }>() => {
  const state = useState<string[]>([]);
  const store = useExtendedStore<Item>(state);

  const getItem = useCallback(
    (id: string) => {
      return store.getItem(id);
    },
    [store],
  );

  const addItem = useCallback(
    (item: Item) => {
      return store.addNewItem(0, item);
    },
    [store],
  );

  const remoteItem = useCallback(
    (id: string) => {
      return store.remoteItem(0, id);
    },
    [store],
  );

  const clear = useCallback(() => {
    return store.clearAll();
  }, [store]);

  return {
    getItem,
    addItem,
    remoteItem,
    clear,
    store: state[0],
    items: store.items,
  } as const;
};
