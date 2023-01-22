export function LogExecutionTime() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
      const t1 = performance.now();
      const originalMethodReturn = originalMethod.apply(this, args);
      const t2 = performance.now();

      console.log(`${propertyKey}, execution time: ${(t1 - t2) / 1000}`);
      return originalMethod;
    };
    return descriptor;
  };
}
