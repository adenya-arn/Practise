import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

// export const useAuthStore = create((set) => ({
//   user: null,
//   login: (userData) => set({ user: userData }),
//   logout: () => set({ user: null }),
// }));

const useStore = create(
  devtools(
    persist(
      (set) => ({
        count: 0,
        increase: () => set((state) => ({ count: state.count + 1 })),
        decrease: () => set((state) => ({ count: state.count - 1 })),
        reset: () => set({ count: 0 }),
        doubleCount: () => set((state) => ({ count: state.count * 2 })),
      }),
      {
        name: "counter-storage",
      }
    )
  )
);
export default useStore;
