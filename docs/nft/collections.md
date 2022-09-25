# NFT Collection Standard

Suiet groups NFTs by their collections. Thus in order to be grouped together, individual NFTs should all reference the same collection address with a field `collection_id`. This collection address is itself home to an object with metadata that describes the collection. And we suggest that a collection object should have some fields for metadata to provide a better interface to users, Suiet will look to these fields in the following table:

| Field                   | Type   | Description                                                                   |
| ----------------------- | ------ | ----------------------------------------------------------------------------- |
| name                    | string | Name of the collection.                                                       |
| description             | string | Description of the collection.                                                |
| url (optional)          | Url    | URL pointing to the collection's image.                                       |
| external_url (optional) | Url    | URL pointing to an external URL defining the asset — e.g. a game's main site. |
