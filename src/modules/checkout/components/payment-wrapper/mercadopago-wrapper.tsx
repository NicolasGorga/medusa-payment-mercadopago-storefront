import { HttpTypes } from "@medusajs/types"
import { initMercadoPago } from "@mercadopago/sdk-react"
import { createContext, useEffect } from "react"

type Props = {
    paymentSession?: HttpTypes.StorePaymentSession,
    mercadopagoKey?: string,
    children: React.ReactNode
}

const MercadopagoContext = createContext(false)

const MercadopagoWrapper: React.FC<Props> = ({
    paymentSession,
    mercadopagoKey,
    children,
}) => {
    if (!mercadopagoKey) {
        throw new Error('Missing mercado pago public key')
    }
    
    useEffect(() => {
        //@ts-ignore
        if (!window.MercadoPago) {
            initMercadoPago(mercadopagoKey)
        }
    }, [])
    return (
        <MercadopagoContext.Provider value={true}>
            {children}
        </MercadopagoContext.Provider>
    )
}

export default MercadopagoWrapper