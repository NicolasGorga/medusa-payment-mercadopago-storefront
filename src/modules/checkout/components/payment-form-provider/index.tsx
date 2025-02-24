"use client";
import { IAdditionalData, IPaymentFormData } from "@mercadopago/sdk-react/esm/bricks/payment/type";
import { createContext, Dispatch, SetStateAction, useContext, useState } from "react";

type Props = { children: React.ReactNode };
type PaymentFormContextType = {
    formData: IPaymentFormData | null;
    additionalData: IAdditionalData | null;
    setFormData: Dispatch<SetStateAction<IPaymentFormData | null>>;
    setAdditionalData: Dispatch<SetStateAction<IAdditionalData | null>>;
};

const MercadopagoPaymentDataContext = createContext<PaymentFormContextType | null>(null)
export const useMercadopagoFormData = () => {
    const context = useContext(MercadopagoPaymentDataContext);
    if (!context) {
        throw new Error('useFormData debe ser utilizado en el scope the un PaymentFormProvider');
    }
    return context;
} 

const PaymentFormProvider: React.FC<Props> = ({ children }) => {
    const [formData, setFormData] = useState<IPaymentFormData | null>(null);
    const [additionalData, setAdditionalData] = useState<IAdditionalData | null>(null);
    return (
        <MercadopagoPaymentDataContext.Provider value={{ formData, setFormData, additionalData, setAdditionalData }}>
            {children}
        </MercadopagoPaymentDataContext.Provider>
    );
}

export default PaymentFormProvider;