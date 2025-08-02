declare global {
  interface Window {
    Cal: {
      (action: string, ...args: unknown[]): void;
      ns: {
        [key: string]: (action: string, options: Record<string, unknown>) => void;
      };
    };
    VANTA: {
      GLOBE: (options: {
        el: string | HTMLElement;
        mouseControls: boolean;
        touchControls: boolean;
        gyroControls: boolean;
        minHeight: number;
        minWidth: number;
        scale: number;
        scaleMobile: number;
        color: number;
      }) => { destroy: () => void };
      NET: (options: {
        el: string | HTMLElement;
        mouseControls: boolean;
        touchControls: boolean;
        gyroControls: boolean;
        minHeight: number;
        minWidth: number;
        scale: number;
        scaleMobile: number;
        color: number;
      }) => { destroy: () => void };
      [key: string]: (options: Record<string, unknown>) => { destroy: () => void };
    };
  }
}

export {};
