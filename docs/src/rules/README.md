# Rules

## Directory

::: tip
If your current directory contains a `store` folder, it will create your `<your-store-name>` inside. Otherwise, it will create your `<your-store-name>` in current directory.
Please refer to [rules](/rules/) in order to name your store.
:::

## Store naming

[According to this github discussion](https://github.com/DivanteLtd/vue-storefront/issues/2069), you should declare your store's name this way:

* products
* users
* notifications
* orders
* compare-products

::: warning
Note that if you try to name your store with spaces `your store name`, with numbers `your3 store4 name2` or lower cases, it will automatically generate your store width kebab-case `your-store-name`
:::

<demo-component/>