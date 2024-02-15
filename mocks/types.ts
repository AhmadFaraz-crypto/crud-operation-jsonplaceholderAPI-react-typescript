import type posts from './routes/posts'

type RouteEntityType =
  | typeof posts

type ExtractId<T> = T extends {
  id: infer Id;
  variants: readonly {id: infer Variants}[];
}
  ? `${Id & string}:${Variants & string}`
  : never

export type RouteVariantId = ExtractId<RouteEntityType[number]>
