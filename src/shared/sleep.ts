export const sleep = async (s: number) =>
  await new Promise((f) => setTimeout(f, s * 1000));
