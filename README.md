# @NicolasGorga/medusa-payment-mercadopago-storefront

## Overview

MedusaJS NextJS storefront starter with minimal modifications, including [Mercado Pago Payment Brick](https://www.mercadopago.com.uy/developers/es/docs/checkout-bricks/payment-brick/introduction), to test [@nicogorga/medusa-payment-mercadopago](https://github.com/NicolasGorga/medusa-payment-mercadopago) faster

## Prerequisites

- @nicogorga/medusa-payment-mercadopago [prerequisites](https://github.com/NicolasGorga/medusa-payment-mercadopago)

## Installation

1\. Install dependencies

```bash
yarn install
```

2\. Setup env variable NEXT_PUBLIC_MP_PUBLIC_KEY in .env.local, with the Public Key obtained from your Mercado Pago account Credentials section

## Test the Plugin

1\. Initialize the storefront running:

```bash
yarn dev
```

2\. Place an order selecting the "Mercado Pago" provider in the Payment step of the checkout. See [Test Cards](https://www.mercadopago.com.uy/developers/es/docs/checkout-api/integration-test/test-cards) 

3\. Verify you see the Order from Admin dashboard and that the Payment provider is Mercado Pago