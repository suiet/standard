# Suiet NFT guideline

## Introduction

Sui leverages an object-oriented model with the move programming language, every object in Sui has a unique address and represents a kind of asset, some of them are Fungible and others have NFT-like characteristics.
Suiet will display the NFT-like asserts on an individual tab, separate from Fungible tokens that show on the Home tab. With the intention to display users' assets properly in Suiet, we suggest this guideline to NFT creators.

## NFT Collection

Suiet groups NFTs by their collections. Thus in order to be grouped together, individual NFTs should all reference the same collection address with a field `collection_id`. This collection address is itself home to an object with metadata that describes the collection. And we suggest that a collection object should have some fields for metadata to provide a better interface to users, Suiet will look to these fields in the following table:

| Field                   | Type   | Description                                                                   |
| ----------------------- | ------ | ----------------------------------------------------------------------------- |
| name                    | string | Name of the collection.                                                       |
| description             | string | Description of the collection.                                                |
| url (optional)          | Url    | URL pointing to the collection's logo.                                        |
| external_url (optional) | Url    | URL pointing to an external URL defining the asset — e.g. a game's main site. |

## NFT

When displaying the detail view of an individual NFT, Suiet will look to these fields in the following table:

| Field                    | Type   | Description                                                                     |
| ------------------------ | ------ | ------------------------------------------------------------------------------- |
| name                     | string | Name of the asset.                                                              |
| symbol                   | string | Symbol of the asset.                                                            |
| description              | string | Description of the asset.                                                       |
| url                      | Url    | URL pointing to the asset's logo.                                               |
| collection_id (optional) | UID    | Object ID of the NFT's collection.                                              |
| animation_url(optional)  | Url    | URL pointing to the asset's animation.                                          |
| external_url (optional)  | Url    | URL pointing to an external URL defining the asset — e.g. the game's main site. |
| attribute_keys           | array  | Array of keys of attributes defining the characteristics of the asset.          |
| attribute_values         | array  | Array of values of attributes defining the characteristics of the asset.        |

## Rendering Media

We recommend that creators put media files on IPFS, and we will choose a relatively fast IPFS gateway as the default gateway in the future.

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
