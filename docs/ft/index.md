# Fungible Token Metadata Standard

## FT

When displaying the detail view of an individual NFT, Suiet will look to these fields in the following table:

| Field                 | Type   | Description                        |
| --------------------- | ------ | ---------------------------------- |
| name                  | string | Name of the asset.                 |
| description(optional) | string | Description of the asset.          |
| symbol                | string | Symbol of the asset.               |
| url                   | url    | URL pointing to the asset's image. |

Here is a sample of the metadata:

```json
{
  "type": "coin::Coin<0x2::usdc::USDC>",
  "fields": {
    "name": "USDC",
    "description": "USDC coin on sui.",
    "url": "https://www.circle.com/hs-fs/hubfs/sundaes/USDC.png?width=540&height=540&name=USDC.png",
    "symbol": "USDC"
  }
}
```

## Rendering Media

We recommend that creators put media files on IPFS, and we will choose a relatively fast IPFS gateway as the default gateway in the future.
