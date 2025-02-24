"use server"

import { sdk } from "@lib/config"
import { getAuthHeaders, getCacheOptions } from "./cookies"
import { HttpTypes } from "@medusajs/types"
import { IPaymentFormData } from "@mercadopago/sdk-react/esm/bricks/payment/type"

export const listCartPaymentMethods = async (regionId: string) => {
  const headers = {
    ...(await getAuthHeaders()),
  }

  const next = {
    ...(await getCacheOptions("payment_providers")),
  }

  return sdk.client
    .fetch<HttpTypes.StorePaymentProviderListResponse>(
      `/store/payment-providers`,
      {
        method: "GET",
        query: { region_id: regionId },
        headers,
        next,
        cache: "force-cache",
      }
    )
    .then(({ payment_providers }) =>
      payment_providers.sort((a, b) => {
        return a.id > b.id ? 1 : -1
      })
    )
    .catch(() => {
      return null
    })
}

export const confirmMercadopagoPayment = async (paymentSessionId: string, paymentData: IPaymentFormData['formData']) => {
  const headers = {
    ...(await getAuthHeaders()),
  }
  return sdk.client.fetch(
    '/store/mercadopago/payment',
    {
      method: 'POST',
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
      body: {
        paymentSessionId, 
        paymentData,
      }
    }
  )
  .then(res => res)
}
