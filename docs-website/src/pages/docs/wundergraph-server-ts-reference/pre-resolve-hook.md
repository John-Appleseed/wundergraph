---
title: Pre Resolve Hook
pageTitle: WunderGraph - Pre Resolve Hook
description:
---

The `preResolve` hook is called before the Operation gets resolved.
As it's not a "mutating" hook,
you cannot use it to modify the input of the Operation.

The main purpose of this hook is e.g. logging.

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
        preResolve: async ({
          input,
          user,
          log,
          internalClient,
          clientRequest,
        }) => {
          log.info(`Pre-resolve hook called for Dragons with ${input}`)
        },
      },
    },
  },
}))
```
