export const generateUniqueId = (): string =>
  Date.now().toString() + Math.random().toString();
