import create from 'zustand';
import { persist } from 'zustand/middleware';

export type ExampleState = {
  count: number;
  increaseCount: () => void;
  decreaseCount: () => void;
};

export const useExampleStore = create<ExampleState>()(
  persist(
    (set) => ({
      count: 0,
      increaseCount: () => set((state) => ({ count: state.count + 1 })),
      decreaseCount: () => set((state) => ({ count: state.count - 1 })),
    }),
    {
      name: 'example-storage',
    },
  ),
);
