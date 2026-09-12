import '@testing-library/jest-dom/vitest';

// jsdom does not implement matchMedia; the appearance hook (and any
// `prefers-color-scheme`/`prefers-reduced-motion` check) needs a stub.
if (typeof window !== 'undefined' && !window.matchMedia) {
    window.matchMedia = (query: string) =>
        ({
            matches: false,
            media: query,
            onchange: null,
            addListener: () => {},
            removeListener: () => {},
            addEventListener: () => {},
            removeEventListener: () => {},
            dispatchEvent: () => false,
        }) as MediaQueryList;
}
