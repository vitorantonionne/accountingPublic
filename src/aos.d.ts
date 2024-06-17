declare module 'aos' {
  interface addOption {
    duration?: number;
    easing?: string;
    once?: boolean;
    offset?: number;
    delay?: number;
    disable?: boolean;
}
  interface Aos {
    init(options?: AosOptions): void;
    refresh(): void;
}
  const aos: Aos;
  export default aos;
}
  