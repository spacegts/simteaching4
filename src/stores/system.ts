import { defineStore } from "pinia";
import { ref } from "vue";

export const useSystemStore = defineStore("system", () => {
  const dialogLoading = ref(false);

  return {
    dialogLoading,
  };
});
