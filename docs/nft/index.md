# NFT Metadata Standard

## NFT

When displaying the detail view of an individual NFT, Suiet will look to these fields in the following table:

| Field                    | Type   | Description                                                                   |
| ------------------------ | ------ | ----------------------------------------------------------------------------- |
| name                     | string | Name of the asset.                                                            |
| description              | string | Description of the asset.                                                     |
| url                      | url    | URL pointing to the asset's image.                                            |
| collection_id (optional) | uid    | Object ID of the NFT's collection.                                            |
| symbol (optional)        | string | Symbol of the asset.                                                          |
| animation_url(optional)  | url    | URL pointing to the asset's animation.                                        |
| external_url (optional)  | url    | URL pointing to an external URL defining the asset — e.g. a game's main site. |
| attribute_keys           | array  | Array of keys of attributes defining the characteristics of the asset.        |
| attribute_values         | array  | Array of values of attributes defining the characteristics of the asset.      |

Here is a sample of the metadata:

```json
{
  "type": "0x3645d45683e8bde7608d5adc677b8301f1d053dc::std_nft::NftMeta",
  "fields": {
    "name": "Suiet",
    "description": "Suiet is a decentralized social network for NFTs.",
    "url": "https://suiet.app/logo.png",
    "collection_id": "0x59bd48a0cc36a577795ba0a15ed424feaa7cdb52",
    "animation_url": "https://suiet.app/logo.gif",
    "external_url": "https://suiet.app",
    "attributes_keys": [
      "Button type",
      "Attribute count",
      "Type",
      "Rarity",
      "Joystick",
      "Body",
      "Background"
    ],
    "attributes_values": [
      "Pink",
      "2",
      "Genesis",
      "Uncommon",
      "Rage",
      "Rage",
      "Violet"
    ]
  }
}
```

## Rendering Media

We recommend that using the ipfs protocol when putting media files on IPFS(same as Arweave), here are some reasons:

1. Using IPFS protocol can ensure the media is pointing to the unique file on ipfs network, rather than the file on a specific gateway server.
2. The gateway might be nolonger maintained in the future, and the url will be broken.
3. Dapps can choose the fastest gateway when user accessing the media, can help to imporve the user experience.

### Selecting Media

When determining what media to display for a given NFT, Suiet will search the object fields in the following order of perference:

1. `animation_url`
2. `url`

If Suiet cannot finally find media to display, it will fallback to display a default image for the NFT.

### Supported Media Type

Here is the full list of media types that Suiet supports. The list will be updated as our development progresses.

#### Images

- `.jpeg`
- `.jpg`
- `.png`
- `.gif`

#### Video

TBD

#### Audio

TBD

#### 3D Models

TBD
