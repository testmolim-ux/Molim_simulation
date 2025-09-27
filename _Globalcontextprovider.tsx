import React, { createContext, useState, useContext, ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TooltipProvider } from './Tooltip';
import { SonnerToaster } from './SonnerToaster';
import { ScrollToHashElement } from './ScrollToHashElement';
import { AuthProvider } from './helpers/useAuth';

type AppContextType = {
  theme: 'light' | 'dark';
  setTheme: (t: 'light' | 'dark') => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const GlobalContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  return <AppContext.Provider value={{ theme, setTheme }}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  const c = useContext(AppContext);
  if (!c) throw new Error('useAppContext must be used within GlobalContextProvider');
  return c;
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    },
  },
});

export const GlobalContextProviders = ({ children }: { children: ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ScrollToHashElement />
      <AuthProvider>
        <TooltipProvider>
          {children}
          <SonnerToaster />
        </TooltipProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default GlobalContextProvider;
