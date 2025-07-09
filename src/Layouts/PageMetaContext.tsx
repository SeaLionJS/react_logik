import { createContext, useContext } from "react";

interface PageMeta {
  title?: string;
  description?: string;
  setMeta: (meta: { title?: string; description?: string }) => void;
}

export const PageMetaContext = createContext<PageMeta>({
  title: undefined,
  description: undefined,
  setMeta: () => {},
});

export const usePageMeta = () => useContext(PageMetaContext);
