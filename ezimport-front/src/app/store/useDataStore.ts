import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface IExcelDataStore {
  excelData: {
    data: Array<Array<string>>;
  };
  setExcelData: (data: any) => void;
}

const useDataStore = create<IExcelDataStore>()(
  persist(
    (set) => ({
      excelData: {
        data: [[]],
      },
      setExcelData: (excelData) => {
        set({
          excelData,
        });
      },
    }),
    {
      name: "ezimport-excel-data-store",
      // getStorage: () => ({
      //   getItem: (name) => {
      //     const item = localStorage.getItem(name);
      //     return item ? JSON.parse(item) : undefined;
      //   },
      //   setItem: (name, value) => {
      //     localStorage.setItem(name, JSON.stringify(value));
      //   },
      //   removeItem: (name) => {
      //     localStorage.removeItem(name);
      //   },
      // }),
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useDataStore;

// (data: any) =>
//   set((state: any) => ({ excelData: [...state.excelData, data] })),
