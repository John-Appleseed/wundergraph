---
title: Mutating Post Resolve Hook
pageTitle: WunderGraph - Post Resolve Hook
description:
---

The `mutatingPostResolve` hook is called after the response of an Operation has been resolved.
You're able to modify the response before it gets sent to the client.

Similar to all other hooks,
the `customResolve` hook is called with the following parameters:

- `user`: The user object when the user is authenticated
- `clientRequest`: The original client request object, including Headers
- `log`: The logger object
- `internalClient`: The internal client object
- `response`: The response object (only for postResolve hooks)
- `input`: The input object (only for Operation hooks)

With the `internalClient`,
you're able to securely call into all defined Operations,
e.g. to talk to a database or another service to enrich a response or manipulate the inputs of an Operation.

```typescript
// wundergraph.server.ts
export default configureWunderGraphServer<HooksConfig, InternalClient>(() => ({
  hooks: {
    queries: {
      Dragons: {
        mutatingPostResolve: async ({
          user,
          clientRequest,
          log,
          response,
          internalClient,
        }) => {
          return response
        },
      },
    },
  },
}))
```
