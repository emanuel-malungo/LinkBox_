declare module 'zoid' {
  export function object<T extends Record<string, any>>(schema: T): {
    parse(data: unknown): T;
    safeParse(data: unknown): { success: boolean; data?: T; error?: any };
  };

  export function string(message?: string): {
    email(message?: string): any;
    min(length: number, message?: string): any;
    regex(pattern: RegExp, message?: string): any;
  };

  export function infer<T>(schema: any): T;

  namespace z {
    function object<T extends Record<string, any>>(schema: T): any;
    function string(message?: string): any;
  }

  export const z: typeof z;
}
