import type { Dispatch, SetStateAction } from "react";
import { useCallback, useRef } from "react";

export type BaseState<T> = [T[], Dispatch<SetStateAction<T[]>>];
export type StateArray<T> = [BaseState<T>, ...BaseState<T>[]];

export const useExtendedStore = <Item extends { id: string }>(...states: StateArray<string>) => {
  const items = useRef<Record<string, Item|undefined>>({});

  const getState = useCallback((index: number) => {
    const state = states[index];
    if (!state) {
      throw new Error("out of array range");
    }

    return state;
  }, [states]);
  
  const getItem = (id: string) => {
    return items.current[id];
  }

  const addItemToState = useCallback((stateIndex: number, item: Item) => {
    const state = getState(stateIndex);
    return state[1](previous => [...previous, item.id]);
  }, [getState]);

  const addNewItem = useCallback((stateIndex: number, item: Item) => {
    items.current[item.id] = item;
    return addItemToState(stateIndex, item);
  }, [addItemToState]);

  const removeItemFromState = useCallback((stateIndex: number, id: string) => {
    const state = getState(stateIndex);
    return state[1](previuos => previuos.filter(itemId => itemId !== id));
  }, [getState]);

  const remoteItem = useCallback((stateIndex: number, id: string) => {
    delete items.current[id];
    return removeItemFromState(stateIndex, id);
  }, [removeItemFromState]);

  const clearState = useCallback((stateIndex: number) => {
    const state = getState(stateIndex)
    return state[1]([]);
  }, [getState]);
  
  const clearItems = useCallback(() => {
    items.current = {};
  }, []);

  const clearAll = useCallback(() => {
    states.forEach(state => state[1]([]));
    clearItems();
  }, [clearItems, states]);

  return {
    addItemToState,
    addNewItem,
    removeItemFromState,
    remoteItem,
    clearState,
    clearItems,
    clearAll,
    getItem,
    states,
    items
  } as const;
}
