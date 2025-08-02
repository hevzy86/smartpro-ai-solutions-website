// Global type declarations for VANTA and Cal
interface VantaEffect {
  destroy: () => void;
}

interface VantaOptions {
  el: string | HTMLElement;
  mouseControls: boolean;
  touchControls: boolean;
  gyroControls: boolean;
  minHeight: number;
  minWidth: number;
  scale: number;
  scaleMobile: number;
  color: number;
  [key: string]: unknown;
}

declare global {
  interface Window {
    VANTA: {
      GLOBE: (options: VantaOptions) => VantaEffect;
      NET: (options: VantaOptions) => VantaEffect;
      [key: string]: (options: VantaOptions) => VantaEffect;
    };
    Cal: {
      (action: string, ...args: unknown[]): void;
      ns: {
        [key: string]: (action: string, options: Record<string, unknown>) => void;
      };
    };
  }
}

export {};
