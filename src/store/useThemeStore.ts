import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type ThemeMode = 'light' | 'dark' | 'system';

interface ThemeState {
  mode: ThemeMode;
  isDark: boolean;
  setMode: (mode: ThemeMode) => void;
  toggleTheme: () => void;
}

// Check system preference
const getSystemPreference = (): boolean => {
  if (typeof window !== 'undefined') {
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
  return false;
};

// Update DOM
const updateDOM = (isDark: boolean) => {
  if (typeof document !== 'undefined') {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
};

export const useThemeStore = create<ThemeState>()(
  persist(
    (set, get) => ({
      mode: 'system',
      isDark: getSystemPreference(),
      
      setMode: (mode: ThemeMode) => {
        const isDark = mode === 'system' ? getSystemPreference() : mode === 'dark';
        updateDOM(isDark);
        set({ mode, isDark });
      },
      
      toggleTheme: () => {
        const { mode } = get();
        if (mode === 'system') {
          const newMode = getSystemPreference() ? 'light' : 'dark';
          get().setMode(newMode);
        } else {
          get().setMode(mode === 'light' ? 'dark' : 'light');
        }
      },
    }),
    {
      name: 'theme-storage',
      onRehydrateStorage: () => (state) => {
        if (state) {
          const isDark = state.mode === 'system' ? getSystemPreference() : state.mode === 'dark';
          updateDOM(isDark);
          state.isDark = isDark;
        }
      },
    }
  )
);

// Listen for system preference changes
if (typeof window !== 'undefined') {
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    const { mode, setMode } = useThemeStore.getState();
    if (mode === 'system') {
      setMode('system');
    }
  });
}