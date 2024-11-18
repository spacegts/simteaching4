import { defineStore } from "pinia";
import { ref, reactive } from "vue";
import { login as loginApi } from "../api/us-user";

export const useAccountStore = defineStore(
  "account",
  () => {
    const token = ref();
    const info = reactive({
      id: null,
      name: null,
    });
    const roles = ref([]);
    const authoritys = ref([]);

    const login = async (account: string, password: string) => {
      const res = (await loginApi(account, password)) as any;
      if (res.code == "0") token.value = res.result;
      return res;
    };

    const logout = () => {
      token.value = null;
      roles.value = [];
      authoritys.value = [];
      Object.keys(info).forEach((key) => ((info as any)[key] = null));
    };

    return {
      token,
      info,
      roles,
      authoritys,
      login,
      logout,
    };
  },
  {
    persist: true,
  }
);
