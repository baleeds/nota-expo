type InferPromise<T> = T extends Promise<infer R> ? R : never;

export async function attempt<T extends Promise<any>>(
  promise: T
): Promise<[Error | undefined, InferPromise<T> | undefined]> {
  try {
    const data: InferPromise<T> = await promise;
    return [undefined, data];
  } catch (err) {
    console.error(err);
    return [err, undefined];
  }
}
