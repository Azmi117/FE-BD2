import create from 'zustand';

const useStore = create((set) => ({
    token: null,
    user: null,
    file: null,
    setToken: (token) => set({ token }),
    setUser: (user) => set({ user }),
    setFile: (file) => set({ file }),
    logout: () => set({ token: null, user: null, file: null }),
}));

export default useStore;
