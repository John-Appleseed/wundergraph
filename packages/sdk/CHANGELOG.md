# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [0.116.1](https://github.com/wundergraph/wundergraph/compare/@wundergraph/sdk@0.116.0...@wundergraph/sdk@0.116.1) (2022-10-18)

**Note:** Version bump only for package @wundergraph/sdk

## [0.116.0](https://github.com/wundergraph/wundergraph/compare/@wundergraph/sdk@0.115.0...@wundergraph/sdk@0.116.0) (2022-10-18)

### Features

* add configurable per-source timeouts ([#232](https://github.com/wundergraph/wundergraph/issues/232)) ([bb3b6bd](https://github.com/wundergraph/wundergraph/commit/bb3b6bd31250b402fe0c9a099b0dad993976cf39)) (@fiam)
* align logging format hooks server and ([#240](https://github.com/wundergraph/wundergraph/issues/240)) ([e601d4c](https://github.com/wundergraph/wundergraph/commit/e601d4c1597a949c2c564a5b953b4424dae5ee7c)) (@spetrunin)
* subscriptions, ws connection init hook ([#243](https://github.com/wundergraph/wundergraph/issues/243)) ([2e4ae85](https://github.com/wundergraph/wundergraph/commit/2e4ae8506558165a9bf3ada4b8f45cee55a9f18d)) (@YuriBuerov)

### Bug Fixes

* fix mutations are possibly undefined ([#265](https://github.com/wundergraph/wundergraph/issues/265)) ([cea8607](https://github.com/wundergraph/wundergraph/commit/cea860703a1f76a63dae292770514218624ce3a1)) (@JivusAyrus)

## [0.115.0](https://github.com/wundergraph/wundergraph/compare/@wundergraph/sdk@0.114.6...@wundergraph/sdk@0.115.0) (2022-10-12)

### Features

* refactor cache handling, move storage out of generated ([#238](https://github.com/wundergraph/wundergraph/issues/238)) ([6351e35](https://github.com/wundergraph/wundergraph/commit/6351e35419215b4bc63bce4a80e16e20d8e9d2d0)) (@fiam)

### Bug Fixes

* correctly generate typenames for nested array objects ([#257](https://github.com/wundergraph/wundergraph/issues/257)) ([ca61274](https://github.com/wundergraph/wundergraph/commit/ca612747122195a826b9362e24765b66562e06cf)) (@jensneuse)
* live query support in generated web client ([#248](https://github.com/wundergraph/wundergraph/issues/248)) ([a1bc5f5](https://github.com/wundergraph/wundergraph/commit/a1bc5f5fe5182d87759ea895257e1f643e472e4a)), closes [#78](https://github.com/wundergraph/wundergraph/issues/78) (@xzyfer)

## [0.114.6](https://github.com/wundergraph/wundergraph/compare/@wundergraph/sdk@0.114.5...@wundergraph/sdk@0.114.6) (2022-10-10)

**Note:** Version bump only for package @wundergraph/sdk

## [0.114.5](https://github.com/wundergraph/wundergraph/compare/@wundergraph/sdk@0.114.4...@wundergraph/sdk@0.114.5) (2022-10-07)

### Bug Fixes

* automatically rename subscription object fields for oas ([#246](https://github.com/wundergraph/wundergraph/issues/246)) ([aaf018e](https://github.com/wundergraph/wundergraph/commit/aaf018e038758dcf5f79c9ee42641a9c562d5a70)) (@jensneuse)

## [0.114.4](https://github.com/wundergraph/wundergraph/compare/@wundergraph/sdk@0.114.3...@wundergraph/sdk@0.114.4) (2022-10-07)

### Bug Fixes

* **sdk/client:** include extra headers from constructor ([#244](https://github.com/wundergraph/wundergraph/issues/244)) ([d59e3ab](https://github.com/wundergraph/wundergraph/commit/d59e3ab1d90c82a2971253e6afdc793d6f6e3f46)) (@chronotc)
* **sdk:** add fastify route only if the hook is configured ([#204](https://github.com/wundergraph/wundergraph/issues/204)) ([4d744a3](https://github.com/wundergraph/wundergraph/commit/4d744a3c3923b9c0db926ea393cbba821b4b8b74)) (@JivusAyrus)

## [0.114.3](https://github.com/wundergraph/wundergraph/compare/@wundergraph/sdk@0.114.2...@wundergraph/sdk@0.114.3) (2022-10-04)

### Bug Fixes

* introspection, infinite loop in file changes ([#230](https://github.com/wundergraph/wundergraph/issues/230)) ([4fdf635](https://github.com/wundergraph/wundergraph/commit/4fdf6352bddd63125be673f55808f4d8493299b8)) (@YuriBuerov)

## [0.114.2](https://github.com/wundergraph/wundergraph/compare/@wundergraph/sdk@0.114.1...@wundergraph/sdk@0.114.2) (2022-09-30)

### Bug Fixes

* re-enable to specify wundergraph dir via arg ([#226](https://github.com/wundergraph/wundergraph/issues/226)) ([50cb5f2](https://github.com/wundergraph/wundergraph/commit/50cb5f22468fa481089caeba9935ee65e9dfe1f3)) (@jensneuse)

## [0.114.1](https://github.com/wundergraph/wundergraph/compare/@wundergraph/sdk@0.114.0...@wundergraph/sdk@0.114.1) (2022-09-29)

**Note:** Version bump only for package @wundergraph/sdk

## [0.114.0](https://github.com/wundergraph/wundergraph/compare/@wundergraph/sdk@0.113.2...@wundergraph/sdk@0.114.0) (2022-09-29)

### Features

*  add graphql introspection middleware ([#214](https://github.com/wundergraph/wundergraph/issues/214)) ([33e840c](https://github.com/wundergraph/wundergraph/commit/33e840c995c5d482e6e755d19bbd76b006d19f3c)) (@spetrunin)
* sse subscriptions configuration ([#217](https://github.com/wundergraph/wundergraph/issues/217)) ([7bf72ef](https://github.com/wundergraph/wundergraph/commit/7bf72efd16a8bac422db32fe957e102395d7357c)) (@YuriBuerov)

### Bug Fixes

* allow to configure internal and public node urls separately ([#207](https://github.com/wundergraph/wundergraph/issues/207)) ([c01bd9a](https://github.com/wundergraph/wundergraph/commit/c01bd9a1cedefbb5fd0ecde83f3b96b3dfee6f41)) (@spetrunin)
* synchronize prisma install for multiple prisma datasources ([#222](https://github.com/wundergraph/wundergraph/issues/222)) ([9ca1fc9](https://github.com/wundergraph/wundergraph/commit/9ca1fc9d3f75ce381bafd4f895c8fb803547a932)) (@jensneuse)

## [0.113.2](https://github.com/wundergraph/wundergraph/compare/@wundergraph/sdk@0.113.1...@wundergraph/sdk@0.113.2) (2022-09-26)

### Bug Fixes

* **cache:** dont print dev messages in prod mode ([#208](https://github.com/wundergraph/wundergraph/issues/208)) ([b22c32a](https://github.com/wundergraph/wundergraph/commit/b22c32ab7f2705b19ad537f76dfef43d589fd026)) (@StarpTech)
* **codegen:** resolve template dependencies recursively ([#209](https://github.com/wundergraph/wundergraph/issues/209)) ([283a9c8](https://github.com/wundergraph/wundergraph/commit/283a9c8db4c28f8fb1177fd68aa6a55acc98e8a0)) (@StarpTech)

## [0.113.1](https://github.com/wundergraph/wundergraph/compare/@wundergraph/sdk@0.113.0...@wundergraph/sdk@0.113.1) (2022-09-22)

**Note:** Version bump only for package @wundergraph/sdk

## [0.113.0](https://github.com/wundergraph/wundergraph/compare/@wundergraph/sdk@0.112.0...@wundergraph/sdk@0.113.0) (2022-09-21)

### Features

* add auth example for swr ([#200](https://github.com/wundergraph/wundergraph/issues/200)) ([7a5f34e](https://github.com/wundergraph/wundergraph/commit/7a5f34e8c80141f400a9b6ed195d04a22a86c92b)) (@StarpTech)

## [0.112.0](https://github.com/wundergraph/wundergraph/compare/@wundergraph/sdk@0.111.0...@wundergraph/sdk@0.112.0) (2022-09-21)

### Features

* add post logout hook ([#196](https://github.com/wundergraph/wundergraph/issues/196)) ([6870130](https://github.com/wundergraph/wundergraph/commit/6870130b0c4e6fc269d81160994384c1d1cf6e59)) (@jensneuse)

## [0.111.0](https://github.com/wundergraph/wundergraph/compare/@wundergraph/sdk@0.110.0...@wundergraph/sdk@0.111.0) (2022-09-20)

### Features

* add swr hooks for auth and file upload ([#195](https://github.com/wundergraph/wundergraph/issues/195)) ([a0b1bae](https://github.com/wundergraph/wundergraph/commit/a0b1bae6a18e30fcefc35bdde2f72326f3de1392)) (@StarpTech)

## [0.110.0](https://github.com/wundergraph/wundergraph/compare/@wundergraph/sdk@0.109.0...@wundergraph/sdk@0.110.0) (2022-09-19)

### Features

* make typescript client typesafe ([#179](https://github.com/wundergraph/wundergraph/issues/179)) ([942b278](https://github.com/wundergraph/wundergraph/commit/942b2782255de3b9e6374500c7a8047de074e4ff)), closes [#188](https://github.com/wundergraph/wundergraph/issues/188) (@Pagebakers)

## [0.109.0](https://github.com/wundergraph/wundergraph/compare/@wundergraph/sdk@0.108.0...@wundergraph/sdk@0.109.0) (2022-09-19)

### Features

* implement config first approach ([#151](https://github.com/wundergraph/wundergraph/issues/151)) ([803da0e](https://github.com/wundergraph/wundergraph/commit/803da0e51beb3a7b23ee826dfde835eccfa1c2dd)), closes [#190](https://github.com/wundergraph/wundergraph/issues/190) (@spetrunin)

### Bug Fixes

* update User interface on client to parse json correctly ([#176](https://github.com/wundergraph/wundergraph/issues/176)) ([f80e410](https://github.com/wundergraph/wundergraph/commit/f80e410530433c6c9b1c290abca2e51b1e7ea907)) (@thisisnithin)

## [0.108.0](https://github.com/wundergraph/wundergraph/compare/@wundergraph/sdk@0.107.1...@wundergraph/sdk@0.108.0) (2022-09-15)

### Features

* allow templates in baseURL for openapi ([#183](https://github.com/wundergraph/wundergraph/issues/183)) ([cb279e7](https://github.com/wundergraph/wundergraph/commit/cb279e7829e704d75a1bcea5a87c42b09331c624)) (@jensneuse)
* custom stable hash function for js values ([#182](https://github.com/wundergraph/wundergraph/issues/182)) ([c16c635](https://github.com/wundergraph/wundergraph/commit/c16c635dd6c6ee5a9784e83b4063941b8e3f3435)) (@StarpTech)

## [0.107.1](https://github.com/wundergraph/wundergraph/compare/@wundergraph/sdk@0.107.0...@wundergraph/sdk@0.107.1) (2022-09-15)

**Note:** Version bump only for package @wundergraph/sdk

## [0.107.0](https://github.com/wundergraph/wundergraph/compare/@wundergraph/sdk@0.106.0...@wundergraph/sdk@0.107.0) (2022-09-14)

### Features

* oidc,  allow passing additional query parameters to the IDP ([#178](https://github.com/wundergraph/wundergraph/issues/178)) ([d015bb1](https://github.com/wundergraph/wundergraph/commit/d015bb150762cba7a46865e66f3de633e731de07)) (@YuriBuerov)

## [0.106.0](https://github.com/wundergraph/wundergraph/compare/@wundergraph/sdk@0.105.1...@wundergraph/sdk@0.106.0) (2022-09-09)

### Features

* add golang client ([#170](https://github.com/wundergraph/wundergraph/issues/170)) ([a26bc32](https://github.com/wundergraph/wundergraph/commit/a26bc32d4a178134f893012ca4e2648460b4e7f8)) (@jensneuse)

## [0.105.1](https://github.com/wundergraph/wundergraph/compare/@wundergraph/sdk@0.105.0...@wundergraph/sdk@0.105.1) (2022-09-08)

**Note:** Version bump only for package @wundergraph/sdk

## [0.105.0](https://github.com/wundergraph/wundergraph/compare/@wundergraph/sdk@0.104.0...@wundergraph/sdk@0.105.0) (2022-09-08)

### Features

* improve webhook types ([#173](https://github.com/wundergraph/wundergraph/issues/173)) ([8cb6d97](https://github.com/wundergraph/wundergraph/commit/8cb6d9750f6e14e2fdd3d87ad97ca0cf3236f95b)) (@StarpTech)

## [0.104.0](https://github.com/wundergraph/wundergraph/compare/@wundergraph/sdk@0.103.1...@wundergraph/sdk@0.104.0) (2022-09-06)

### Features

* ensure that user is always set in auth hooks, disable introspection cache in `wunderctl generate` ([#167](https://github.com/wundergraph/wundergraph/issues/167)) ([4b40572](https://github.com/wundergraph/wundergraph/commit/4b40572dd993be1c84e421f1796eb8a2913ecf69)) (@StarpTech)

### Bug Fixes

* sync wunderctl ([06dfe11](https://github.com/wundergraph/wundergraph/commit/06dfe11e885acafe48b6d7e8776cb763f0c75a66)) (@StarpTech)

## [0.103.1](https://github.com/wundergraph/wundergraph/compare/@wundergraph/sdk@0.103.0...@wundergraph/sdk@0.103.1) (2022-09-05)

### Bug Fixes

* fixes open api errors for int based enums and json fields ([#164](https://github.com/wundergraph/wundergraph/issues/164)) ([a79fe3e](https://github.com/wundergraph/wundergraph/commit/a79fe3ebc8c0b8d863123d565edfe0942f03048d)) (@rpeterson)

## [0.103.0](https://github.com/wundergraph/wundergraph/compare/@wundergraph/sdk@0.102.0...@wundergraph/sdk@0.103.0) (2022-09-04)

### Features

* don't exit, throw error and handle at root ([#161](https://github.com/wundergraph/wundergraph/issues/161)) ([5495d27](https://github.com/wundergraph/wundergraph/commit/5495d27c181f12a96655fae0f403ffaedda50816)) (@StarpTech)

### Bug Fixes

* subscription url config ([#162](https://github.com/wundergraph/wundergraph/issues/162)) ([c503400](https://github.com/wundergraph/wundergraph/commit/c503400061a33243702c8e7be753e14d863e5d98)) (@jensneuse)

## [0.102.0](https://github.com/wundergraph/wundergraph/compare/@wundergraph/sdk@0.101.0...@wundergraph/sdk@0.102.0) (2022-09-02)

### Features

* refactor introspection runner ([#158](https://github.com/wundergraph/wundergraph/issues/158)) ([49d0ab3](https://github.com/wundergraph/wundergraph/commit/49d0ab3be58552e017d5120feb7f09d0f48b4aae)) (@StarpTech)

## [0.101.0](https://github.com/wundergraph/wundergraph/compare/@wundergraph/sdk@0.100.0...@wundergraph/sdk@0.101.0) (2022-09-01)

### Features

* implement userId for fromClaim directive ([#152](https://github.com/wundergraph/wundergraph/issues/152)) ([51df6e5](https://github.com/wundergraph/wundergraph/commit/51df6e50244bee9f5f8d579ff6f604e1a1c853d9)) (@jensneuse)

## [0.100.0](https://github.com/wundergraph/wundergraph/compare/@wundergraph/sdk@0.99.0...@wundergraph/sdk@0.100.0) (2022-08-30)

### Features

* **server:** introduce pino base logger ([#146](https://github.com/wundergraph/wundergraph/issues/146)) ([d261b8f](https://github.com/wundergraph/wundergraph/commit/d261b8fe5d8fa6e21058468c2e70b45defa0601a)) (@StarpTech)

### Bug Fixes

* internal directive breaks code generation ([#148](https://github.com/wundergraph/wundergraph/issues/148)) ([a9cb48c](https://github.com/wundergraph/wundergraph/commit/a9cb48cbfd840862cd38f17b9c185407acad7772)) (@jensneuse)
* **types:** make webhooks optional ([#149](https://github.com/wundergraph/wundergraph/issues/149)) ([fa0d243](https://github.com/wundergraph/wundergraph/commit/fa0d243e3bd0bfbf62448d1348709375df404cac)) (@StarpTech)

## [0.99.0](https://github.com/wundergraph/wundergraph/compare/@wundergraph/sdk@0.98.3...@wundergraph/sdk@0.99.0) (2022-08-29)

### Features

* use web std header implementation ([#145](https://github.com/wundergraph/wundergraph/issues/145)) ([7c0359b](https://github.com/wundergraph/wundergraph/commit/7c0359bdc3efac0a8c11ceb23cd49172a991fbd3))(@StarpTech)

## [0.98.3](https://github.com/wundergraph/wundergraph/compare/@wundergraph/sdk@0.98.2...@wundergraph/sdk@0.98.3) (2022-08-25)

**Note:** Version bump only for package @wundergraph/sdk

## [0.98.2](https://github.com/wundergraph/wundergraph/compare/@wundergraph/sdk@0.98.1...@wundergraph/sdk@0.98.2) (2022-08-25)

**Note:** Version bump only for package @wundergraph/sdk

## [0.98.1](https://github.com/wundergraph/wundergraph/compare/@wundergraph/sdk@0.98.0...@wundergraph/sdk@0.98.1) (2022-08-18)

**Note:** Version bump only for package @wundergraph/sdk

## [0.98.0](https://github.com/wundergraph/wundergraph/compare/@wundergraph/sdk@0.97.0...@wundergraph/sdk@0.98.0) (2022-08-18)

### Features

* native webhooks support ([#126](https://github.com/wundergraph/wundergraph/issues/126)) ([a0b38bd](https://github.com/wundergraph/wundergraph/commit/a0b38bd54b88198db6cc176432d577dab0931245))

### Bug Fixes

* issue with unhandled hyphens in input names ([#123](https://github.com/wundergraph/wundergraph/issues/123)) ([b01caaa](https://github.com/wundergraph/wundergraph/commit/b01caaa8c4036afbeb579dbbf14a52d82971b116))

## [0.97.0](https://github.com/wundergraph/wundergraph/compare/@wundergraph/sdk@0.96.1...@wundergraph/sdk@0.97.0) (2022-08-09)

### Features

* add fragment support to sdk ([5839e35](https://github.com/wundergraph/wundergraph/commit/5839e35ad4ab00f9174e8e18a54375580dd1c6a0))
* extract typescript client from nextjs ([#72](https://github.com/wundergraph/wundergraph/issues/72)) ([282797d](https://github.com/wundergraph/wundergraph/commit/282797dd4d28dce922cca8a3d5092d68c508f5bd))
* replace the legacy client with the new implementation ([#78](https://github.com/wundergraph/wundergraph/issues/78)) ([e2468c8](https://github.com/wundergraph/wundergraph/commit/e2468c8856e02a7d1d89dc1c08c1731871bc19f3))

### Bug Fixes

* update tsdoc for hooks config ([8f5d916](https://github.com/wundergraph/wundergraph/commit/8f5d9161383981e5abae2be5c66587cf2b5fb547))

## [0.96.1](https://github.com/wundergraph/wundergraph/compare/@wundergraph/sdk@0.96.0...@wundergraph/sdk@0.96.1) (2022-07-18)

**Note:** Version bump only for package @wundergraph/sdk

## [0.96.0](https://github.com/wundergraph/wundergraph/compare/@wundergraph/sdk@0.95.0...@wundergraph/sdk@0.96.0) (2022-07-13)

### Features

- use headersobject for transport hooks ([#75](https://github.com/wundergraph/wundergraph/issues/75)) ([82059cf](https://github.com/wundergraph/wundergraph/commit/82059cfb87292b3baadc8d618732314a532b5ed6))

### Bug Fixes

- **auth:** pass raw access token to hook ([#76](https://github.com/wundergraph/wundergraph/issues/76)) ([c31644d](https://github.com/wundergraph/wundergraph/commit/c31644ddcb29dcb74063ef20d80d7ef71aa3c88f))

## [0.95.0](https://github.com/wundergraph/wundergraph/compare/@wundergraph/sdk@0.94.4...@wundergraph/sdk@0.95.0) (2022-07-07)

### Features

- add introspection caching & DataSource polling ([#63](https://github.com/wundergraph/wundergraph/issues/63)) ([ec6226e](https://github.com/wundergraph/wundergraph/commit/ec6226e19f930d53e0a621c9a831d2ac5deea913))

### Bug Fixes

- restart hooks server, ensure \_\_wg exists ([#68](https://github.com/wundergraph/wundergraph/issues/68)) ([55435df](https://github.com/wundergraph/wundergraph/commit/55435dfcf9d03187385266bc6d6a3cc9c6606edf))

## [0.94.4](https://github.com/wundergraph/wundergraph/compare/@wundergraph/sdk@0.94.3...@wundergraph/sdk@0.94.4) (2022-07-05)

### Bug Fixes

- **codegen:** detect internal input correctly ([#64](https://github.com/wundergraph/wundergraph/issues/64)) ([7c36904](https://github.com/wundergraph/wundergraph/commit/7c36904e2d5d5a5a8c36b9c31a6f98844aa34081))

## [0.94.3](https://github.com/wundergraph/wundergraph/compare/@wundergraph/sdk@0.94.2...@wundergraph/sdk@0.94.3) (2022-06-30)

**Note:** Version bump only for package @wundergraph/sdk

## [0.94.2](https://github.com/wundergraph/wundergraph/compare/@wundergraph/sdk@0.94.1...@wundergraph/sdk@0.94.2) (2022-06-30)

### Bug Fixes

- call mutation hooks ([#58](https://github.com/wundergraph/wundergraph/issues/58)) ([8ff5f75](https://github.com/wundergraph/wundergraph/commit/8ff5f75ee50483b150a0f1b7512f9e2a2cbcba2d))

## [0.94.1](https://github.com/wundergraph/wundergraph/compare/@wundergraph/sdk@0.94.0...@wundergraph/sdk@0.94.1) (2022-06-30)

**Note:** Version bump only for package @wundergraph/sdk

## [0.94.0](https://github.com/wundergraph/wundergraph/compare/@wundergraph/sdk@0.93.2...@wundergraph/sdk@0.94.0) (2022-06-29)

### Features

- improve error message when graphql introspection fails ([#54](https://github.com/wundergraph/wundergraph/issues/54)) ([b774e73](https://github.com/wundergraph/wundergraph/commit/b774e7341bff0da2343e959854d58deab8dbf580))

### Bug Fixes

- set correct client request, remove inflights checks in client ([06df8dc](https://github.com/wundergraph/wundergraph/commit/06df8dc779702dc257545d000f0d60eb4d99a3da))

## [0.93.2](https://github.com/wundergraph/wundergraph/compare/@wundergraph/sdk@0.93.1...@wundergraph/sdk@0.93.2) (2022-06-29)

### Bug Fixes

- openapi introspection defect ([#53](https://github.com/wundergraph/wundergraph/issues/53)) ([9da07df](https://github.com/wundergraph/wundergraph/commit/9da07df6b84301ade07bbecd741aa643e06a11d4))

## [0.93.1](https://github.com/wundergraph/wundergraph/compare/@wundergraph/sdk@0.93.0...@wundergraph/sdk@0.93.1) (2022-06-23)

**Note:** Version bump only for package @wundergraph/sdk

## [0.93.0](https://github.com/wundergraph/wundergraph/compare/@wundergraph/sdk@0.92.6...@wundergraph/sdk@0.93.0) (2022-06-20)

### ⚠ BREAKING CHANGES

- **hooks:** refactor hooks interface (#40)

### Code Refactoring

- **hooks:** refactor hooks interface ([#40](https://github.com/wundergraph/wundergraph/issues/40)) ([9e58149](https://github.com/wundergraph/wundergraph/commit/9e581498899f3251cd41d6e33c784c4960979c51))

## [0.92.6](https://github.com/wundergraph/wundergraph/compare/@wundergraph/sdk@0.92.5...@wundergraph/sdk@0.92.6) (2022-06-12)

### Bug Fixes

- **hooks:** pass response correctly, pass input arg when available ([#38](https://github.com/wundergraph/wundergraph/issues/38)) ([5e4fe75](https://github.com/wundergraph/wundergraph/commit/5e4fe755a3c46446eaefbb3b5c8e581d55d608d8))

## [0.92.5](https://github.com/wundergraph/wundergraph/compare/@wundergraph/sdk@0.92.4...@wundergraph/sdk@0.92.5) (2022-06-11)

**Note:** Version bump only for package @wundergraph/sdk

## [0.92.4](https://github.com/wundergraph/wundergraph/compare/@wundergraph/sdk@0.92.3...@wundergraph/sdk@0.92.4) (2022-06-11)

**Note:** Version bump only for package @wundergraph/sdk

## [0.92.3](https://github.com/wundergraph/wundergraph/compare/@wundergraph/sdk@0.92.2...@wundergraph/sdk@0.92.3) (2022-06-11)

**Note:** Version bump only for package @wundergraph/sdk

## [0.92.2](https://github.com/wundergraph/wundergraph/compare/@wundergraph/sdk@0.92.1...@wundergraph/sdk@0.92.2) (2022-06-11)

**Note:** Version bump only for package @wundergraph/sdk

## [0.92.1](https://github.com/wundergraph/wundergraph/compare/@wundergraph/sdk@0.92.0...@wundergraph/sdk@0.92.1) (2022-06-10)

**Note:** Version bump only for package @wundergraph/sdk

## [0.92.0](https://github.com/wundergraph/wundergraph/compare/@wundergraph/sdk@0.91.5...@wundergraph/sdk@0.92.0) (2022-06-10)

### Features

- **server:** reimplement bundling, watcher, script runner ([#32](https://github.com/wundergraph/wundergraph/issues/32)) ([594af1d](https://github.com/wundergraph/wundergraph/commit/594af1d3b53c1e9b12dd21bd79a4cc8a51784c3a))

### Bug Fixes

- add test for schema merge conflict, improve error message ([#27](https://github.com/wundergraph/wundergraph/issues/27)) ([7f41a65](https://github.com/wundergraph/wundergraph/commit/7f41a651eb0975c92fb2b8fbe345fe7062c35824))

## [0.91.5](https://github.com/wundergraph/wundergraph/compare/@wundergraph/sdk@0.91.4...@wundergraph/sdk@0.91.5) (2022-06-04)

**Note:** Version bump only for package @wundergraph/sdk

## [0.91.4](https://github.com/wundergraph/wundergraph/compare/@wundergraph/sdk@0.91.3...@wundergraph/sdk@0.91.4) (2022-06-02)

**Note:** Version bump only for package @wundergraph/sdk

## 0.91.3

### Patch Changes

- [`e507ffd`](https://github.com/wundergraph/wundergraph/commit/e507ffd05916d089957b44084d8f3c5387320ef3) Thanks [@StarpTech](https://github.com/StarpTech)! - sync wunderctl version

## 0.91.2

### Patch Changes

- [`b5dbe92`](https://github.com/wundergraph/wundergraph/commit/b5dbe92e6c9d3160bfba3713c43594790cb2effd) Thanks [@StarpTech](https://github.com/StarpTech)! - sync wunderctl version

## 0.91.1

### Patch Changes

- [`d122589`](https://github.com/wundergraph/wundergraph/commit/d122589b501dfa2f6565630de4005e1bc83cc729) Thanks [@StarpTech](https://github.com/StarpTech)! - update wunderctl

## 0.91.0

### Minor Changes

- [#18](https://github.com/wundergraph/wundergraph/pull/18) [`afea237`](https://github.com/wundergraph/wundergraph/commit/afea23771191e049aab5ce56ce775775389e8770) Thanks [@StarpTech](https://github.com/StarpTech)! - move wunderctl / go binary into local node_modules

### Patch Changes

- [#20](https://github.com/wundergraph/wundergraph/pull/20) [`93cf9e1`](https://github.com/wundergraph/wundergraph/commit/93cf9e1cd3b2a30ad79d434f13f84596dd0b3607) Thanks [@jensneuse](https://github.com/jensneuse)! - fix typescript codegen for list of enum

- Updated dependencies [[`afea237`](https://github.com/wundergraph/wundergraph/commit/afea23771191e049aab5ce56ce775775389e8770)]:
  - @wundergraph/protobuf@0.91.0

## 0.90.6

### Patch Changes

- [`ad2e3a6`](https://github.com/wundergraph/wundergraph/commit/ad2e3a6fa97441b49ab477e47463a9ce2d561049) Thanks [@jensneuse](https://github.com/jensneuse)! - fix openapi transformation when array contained ref

## 0.90.5

### Patch Changes

- [`e68d101`](https://github.com/wundergraph/wundergraph/commit/e68d101f5af39918fc810c68ec0cde606009d40c) Thanks [@jensneuse](https://github.com/jensneuse)! - fix oas path resolving

## 0.90.4

### Patch Changes

- [`a53fc56`](https://github.com/wundergraph/wundergraph/commit/a53fc56a054d4b4dc68de53a8d178e3d5341ef58) Thanks [@jensneuse](https://github.com/jensneuse)! - trigger ci

## 0.90.3

### Patch Changes

- [`a27e9f5`](https://github.com/wundergraph/wundergraph/commit/a27e9f50093f7b4775f4d6a1d2f03a56398bc169) Thanks [@jensneuse](https://github.com/jensneuse)! - trigger ci

## 0.90.2

### Patch Changes

- [`7c6b3ae`](https://github.com/wundergraph/wundergraph/commit/7c6b3ae3f86bbe7ee3402556668ce81052f192f4) Thanks [@jensneuse](https://github.com/jensneuse)! - fix database introspection

## 0.90.1

### Patch Changes

- Updated dependencies [[`0857db3`](https://github.com/wundergraph/wundergraph/commit/0857db3d55209fb878fe6326629b125c6f2d2315)]:
  - @wundergraph/protobuf@0.90.1
