# DEN Pets

DEN Pets is the pet profiles and care-service discovery app in the DEN network.

- `/pets/` is served by the existing DEN development backend.
- Pet profiles are private to their owner.
- Providers must own an approved DEN organization; new and edited listings wait for administrator review.
- Booking, payments, pet sales, and adoption are not implemented in this release.

See [PRODUCT.md](PRODUCT.md) for the initial scope and [API.md](API.md) for the same-origin API contract.

## Local development

Install dependencies with `npm ci`, then run `npm run dev` for the standalone Vite server or `npm run build` to create `dist/` for the integrated backend preview.
