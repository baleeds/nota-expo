type Maybe<T> = T | undefined | null;

export function extractNodes<TFragment>(edges: Maybe<Array<Maybe<{ node?: Maybe<TFragment> }>>>) {
  if (!edges) return undefined;

  return edges.reduce<TFragment[]>((acc, edge) => {
    if (edge?.node) {
      acc.push(edge.node);
    }
    return acc;
  }, []);
}
