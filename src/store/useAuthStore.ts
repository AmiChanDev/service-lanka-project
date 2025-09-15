import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { User, Provider } from '../types';

interface AuthState {
  user: User | null;
  provider: Provider | null;
  isAuthenticated: boolean;
  isProvider: boolean;
  token: string | null;
  
  login: (user: User, token: string) => void;
  loginProvider: (provider: Provider, token: string) => void;
  logout: () => void;
  updateUser: (updates: Partial<User>) => void;
  updateProvider: (updates: Partial<Provider>) => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      provider: null,
      isAuthenticated: false,
      isProvider: false,
      token: null,
      
      login: (user, token) => set({ 
        user, 
        token, 
        isAuthenticated: true, 
        isProvider: false,
        provider: null 
      }),
      
      loginProvider: (provider, token) => set({ 
        provider, 
        user: provider as User,
        token, 
        isAuthenticated: true, 
        isProvider: true 
      }),
      
      logout: () => set({ 
        user: null, 
        provider: null,
        token: null, 
        isAuthenticated: false, 
        isProvider: false 
      }),
      
      updateUser: (updates) => set((state) => ({
        user: state.user ? { ...state.user, ...updates } : null
      })),
      
      updateProvider: (updates) => set((state) => ({
        provider: state.provider ? { ...state.provider, ...updates } : null,
        user: state.user ? { ...state.user, ...updates } : null
      })),
    }),
    {
      name: 'auth-storage',
    }
  )
);