type FunctionType = (...args: unknown[]) => unknown;

export function compose(...fns: FunctionType[]) {
  return (x: unknown) =>
    fns.reduceRight((v: unknown, f: FunctionType) => f(v), x);
}
