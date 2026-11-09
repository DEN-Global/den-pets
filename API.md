# DEN Pets API

All routes use the existing same-origin DEN session and CSRF protections. The browser never receives a service API key.

## Pet profiles

- `GET /api/pets/profiles` — return the signed-in user's profiles only.
- `POST /api/pets/profiles` — create a private profile with `name`, `species`, optional `breed`, and optional `ageMonths`.
- `PATCH /api/pets/profiles/:id` — update a profile owned by the signed-in user.

Profiles do not contain medical history, precise location, or public contact information.

## Service directory

- `GET /api/pets/services?category=&q=` — discover reviewed listings from approved DEN organizations.
- `GET /api/pets/services/mine` — return listings and approved organizations owned by the signed-in user.
- `POST /api/pets/services` — submit a listing for review with `organizationId`, `category`, `title`, `description`, and city/neighborhood `area`.
- `PATCH /api/pets/services/:id` — update a listing; edits return it to pending review.

Allowed categories: `grooming`, `walking`, `boarding`, `sitting`, `training`, and `daycare`. Veterinary services, pet sales, adoption, bookings, and payments are not part of this API slice.

## Review

- `GET /api/admin/pets/services?status=pending` — fresh-MFA administrator review queue.
- `POST /api/admin/pets/services/:id/review` — approve or reject a pending listing with `{ "decision": "approved|rejected", "reason": "..." }`.

Public directory results omit provider contact details and precise addresses. Booking is disabled.

## Manager and rider alerts

The shared manager/rider companion uses the DEN platform routes:

- `GET /api/platform/push/config` — returns the VAPID public key and whether this environment can send background push.
- `GET /api/platform/push/subscriptions` — returns whether this signed-in user has an active subscription.
- `POST /api/platform/push/subscriptions` — saves a browser subscription after an explicit opt-in. Subscription details are encrypted at rest.
- `DELETE /api/platform/push/subscriptions` — removes the signed-in user's browser subscription using `{ "endpoint": "..." }`.

Order creation adds manager and eligible rider updates when the sandbox checkout is enabled; live payment checkout remains disabled in this preview. Background notifications need VAPID server secrets and user notification permission. See [the companion implementation notes](../den-shared/docs/pet-companion.md).
