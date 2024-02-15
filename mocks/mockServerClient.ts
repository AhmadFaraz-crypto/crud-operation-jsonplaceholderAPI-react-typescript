import axios from 'axios'
import type {RouteVariantId} from './types'

const mockServerClient = axios.create({
  baseURL: 'http://127.0.0.1:3110/api',
})

export async function useRouteVariants(routeVariantIds: RouteVariantId[]) {
  return Promise.all(
    routeVariantIds.map(routeVariantId =>
      mockServerClient.post('mock/custom-route-variants', {id: routeVariantId}),
    ),
  )
}

export function removeCustomRouteVariants() {
  return mockServerClient.delete('mock/custom-route-variants')
}
