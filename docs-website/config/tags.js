const tags = {
	'Getting Started Guide': '/getting-started',
	'Getting Started': '/getting-started',
	'getting started': '/getting-started',
	'WunderGraph SDK': '/docs/components-of-wundergraph/wundergraph-sdk',
	'TypeScript SDK': '/docs/components-of-wundergraph/wundergraph-sdk',
	'WunderGraph CLI': '/docs/components-of-wundergraph/wunderctl',
	CLI: '/docs/components-of-wundergraph/wunderctl',
	wunderctl: '/docs/components-of-wundergraph/wunderctl',
	'_join field': '/docs/core-concepts/_join-field',
	'_join Field': '/docs/core-concepts/_join-field',
	_join: '/docs/core-concepts/_join-field',
	'Virtual Graph': '/docs/core-concepts/virtual-graph',
	'virtual Graph': '/docs/core-concepts/virtual-graph',
	'API Namespacing': '/docs/core-concepts/api-namespacing',
	'API namespacing': '/docs/features/api-namespacing',
	Namespacing: '/docs/core-concepts/api-namespacing',
	namespacing: '/docs/features/api-namespacing',
	'WunderNode / WunderGraph Server':
		'/docs/components-of-wundergraph/wundernode-wundergraph-server',
	WunderNods: '/docs/components-of-wundergraph/wundernode-wundergraph-server',
	WunderNode: '/docs/components-of-wundergraph/wundernode-wundergraph-server',
	'WunderGraph Server':
		'/docs/components-of-wundergraph/wundernode-wundergraph-server',
	'Architecture Introduction': '/docs/architecture/architecture-diagram',
	'Cross API JOIN': '/docs/features/cross-api-joins-to-compose-apis',
	JOINs: '/docs/features/cross-api-joins-to-compose-apis',
	'GraphQL to JSON RPC compiler': '/docs/features/graphql-to-json-rpc-compiler',
	'GraphQL to JSON RPC': '/docs/features/graphql-to-json-rpc-compiler',
	'JSON RPC': '/docs/features/graphql-to-json-rpc-compiler',
	'CSRF Protection': '/docs/features/automatic-csrf-protection-for-mutations',
	CSRF: '/docs/features/automatic-csrf-protection-for-mutations',
	ETag: '/docs/features/automatic-content-revalidation-with-etags',
	'Custom GraphQL Resolvers': '/docs/features/custom-graphql-resolvers',
	'custom GraphQL resolvers': '/docs/features/custom-graphql-resolvers',
	'custom GraphQL resolver': '/docs/features/custom-graphql-resolvers',
	'Authentication-aware data fetching':
		'/docs/features/authentication-aware-data-fetching',
	'inject claims': '/docs/features/authorization-injecting-claims',
	'injecting claims': '/docs/features/authorization-injecting-claims',
	'claims injection': '/docs/features/authorization-injecting-claims',
	'claim injection': '/docs/features/authorization-injecting-claims',
	claims: '/docs/features/authorization-injecting-claims',
	claim: '/docs/features/authorization-injecting-claims',
	Claims: '/docs/features/authorization-injecting-claims',
	Claim: '/docs/features/authorization-injecting-claims',
	'configuration as code': '/docs/features/configuration-as-code',
	'file-based Operations': '/docs/features/file-based-operations',
	'file based Operations': '/docs/features/file-based-operations',
	'file uploads': '/docs/features/file-uploads-to-s3-compatible-file-storages',
	s3: '/docs/features/file-uploads-to-s3-compatible-file-storages',
	S3: '/docs/features/file-uploads-to-s3-compatible-file-storages',
	'generate APIs': '/docs/features/generated-apis-for-any-database',
	'generate clients': '/docs/features/generated-clients-and-sdks',
	'generate SDKs': '/docs/features/generated-clients-and-sdks',
	'HTTP layer caching': '/docs/features/http-layer-caching',
	caching: '/docs/features/http-layer-caching',
	'JSON Schema validation': '/docs/features/json-schema-validation',
	'JSON Schema': '/docs/features/json-schema-validation',
	'input validation': '/docs/features/json-schema-validation',
	'live queries': '/docs/features/live-queries',
	'live Queries': '/docs/features/live-queries',
	'Live Queries': '/docs/features/live-queries',
	'Live Query': '/docs/features/live-queries',
	'Live-Query': '/docs/features/live-queries',
	'Live-Queries': '/docs/features/live-queries',
	'live-queries': '/docs/features/live-queries',
	'local development': '/docs/features/local-development',
	'OpenID Connect based authentication':
		'/docs/features/openid-connect-based-authentication',
	'OpenID Connect': '/docs/features/openid-connect-based-authentication',
	'realtime subscriptions': '/docs/features/realtime-subscriptions',
	Subscriptions: '/docs/features/realtime-subscriptions',
	realtime: '/docs/features/realtime-subscriptions',
	'typesafe mocking': '/docs/features/type-safe-mocking',
	'type-safe mocking': '/docs/features/type-safe-mocking',
	'TypeScript hooks':
		'/docs/features/type-script-hooks-to-customize-the-api-gateway-middleware',
	webhooks:
		'/docs/features/type-script-webhooks-to-integrate-third-party-applications',
	Webhooks:
		'/docs/features/type-script-webhooks-to-integrate-third-party-applications',
	hooks:
		'/docs/features/type-script-hooks-to-customize-the-api-gateway-middleware',
	Hooks:
		'/docs/features/type-script-hooks-to-customize-the-api-gateway-middleware',
	'configure authorization': '/docs/guides/configure-authorization',
	'configure Authorization': '/docs/guides/configure-authorization',
	authorization: '/docs/features/authorization-role-based-access-control-rbac',
	Authorization: '/docs/features/authorization-role-based-access-control-rbac',
	rbac: '/docs/features/authorization-role-based-access-control-rbac',
	RBAC: '/docs/features/authorization-role-based-access-control-rbac',
	'Role Based Access Control':
		'/docs/features/authorization-role-based-access-control-rbac',
	'role based access control':
		'/docs/features/authorization-role-based-access-control-rbac',
	'wundergraph.config.ts reference': '/docs/wundergraph-config-ts-reference',
	'wundergraph.config.ts': '/docs/wundergraph-config-ts-reference',
	'wundergraph.manifest.json reference':
		'/docs/wundergraph-manifest-json-reference',
	'wundergraph.manifest.json': '/docs/wundergraph-manifest-json-reference',
	'wundergraph.operations.ts reference':
		'/docs/wundergraph-operations-ts-reference',
	'wundergraph.operations.ts': '/docs/wundergraph-operations-ts-reference',
	'wundergraph.server.ts reference': '/docs/wundergraph-server-ts-reference',
	'wundergraph.server.ts': '/docs/wundergraph-server-ts-reference',
	'WunderHub reference': '/docs/wunderhub-reference',
	WunderHub: '/docs/components-of-wundergraph/wunderhub',
	'WunderGraph Hub': '/docs/components-of-wundergraph/wunderhub',
	Hub: '/docs/components-of-wundergraph/wunderhub',
	'wunderctl up': '/docs/wunderctl-reference/wunderctl-up',
	'wunderctl add': '/docs/wunderctl-reference/wunderctl-add',
	'wunderctl generate': '/docs/wunderctl-reference/wunderctl-generate',
	'wunderctl init': '/docs/wunderctl-reference/wunderctl-init',
	'wunderctl login': '/docs/wunderctl-reference/wunderctl-login',
	'wunderctl logout': '/docs/wunderctl-reference/wunderctl-logout',
	'wunderctl remove': '/docs/wunderctl-reference/wunderctl-remove',
	'wunderctl version': '/docs/wunderctl-reference/wunderctl-version',
	'wunderctl node start': '/docs/wunderctl-reference/wunderctl-node-start',
	'wunderctl server start': '/docs/wunderctl-reference/wunderctl-server-start',
	'@directives': '/docs/directives-reference',
	'@directive': '/docs/directives-reference',
	'@export': '/docs/directives-reference/export-directive',
	'@fromClaim': '/docs/directives-reference/from-claim-directive',
	'@hooksVariable': '/docs/directives-reference/hooks-variable-directive',
	'@injectCurrentDateTime':
		'/docs/directives-reference/inject-current-date-time-directive',
	'@injectEnvironmentVariable':
		'/docs/directives-reference/inject-environment-variable-directive',
	'@injectGeneratedUUID':
		'/docs/directives-reference/inject-generated-uuid-directive',
	'@injectdUUID': '/docs/directives-reference/inject-generated-uuid-directive',
	'@internal': '/docs/directives-reference/internal-directive',
	'@internalOperation':
		'/docs/directives-reference/internal-operation-directive',
	'@jsonSchema': '/docs/directives-reference/json-schema-directive',
	'@rbac': '/docs/directives-reference/rbac-directive',
	'@transform': '/docs/directives-reference/transform-directive',
	'preResolve hook reference':
		'/docs/wundergraph-server-ts-reference/pre-resolve-hook',
	'preResolve hook': '/docs/wundergraph-server-ts-reference/pre-resolve-hook',
	'mutatingPostResolve hook reference':
		'/docs/wundergraph-server-ts-reference/mutating-post-resolve-hook',
	'mutatingPostResolve hook':
		'/docs/wundergraph-server-ts-reference/mutating-post-resolve-hook',
	mutatingPostResolve:
		'/docs/wundergraph-server-ts-reference/mutating-post-resolve-hook',
	'mutatingPreResolve hook reference':
		'/docs/wundergraph-server-ts-reference/mutating-pre-resolve-hook',
	'mutatingPreResolve hook':
		'/docs/wundergraph-server-ts-reference/mutating-pre-resolve-hook',
	mutatingPreResolve:
		'/docs/wundergraph-server-ts-reference/mutating-pre-resolve-hook',
	preResolve: '/docs/wundergraph-server-ts-reference/pre-resolve-hook',
	'postResolve hook reference':
		'/docs/wundergraph-server-ts-reference/post-resolve-hook',
	'postResolve hook': '/docs/wundergraph-server-ts-reference/post-resolve-hook',
	postResolve: '/docs/wundergraph-server-ts-reference/post-resolve-hook',
	'mockResolve hook reference':
		'/docs/wundergraph-server-ts-reference/mock-resolve-hook',
	'mockResolve hook': '/docs/wundergraph-server-ts-reference/mock-resolve-hook',
	mockResolve: '/docs/wundergraph-server-ts-reference/mock-resolve-hook',
	'customResolve hook reference':
		'/docs/wundergraph-server-ts-reference/custom-resolve-hook',
	'customResolve hook':
		'/docs/wundergraph-server-ts-reference/custom-resolve-hook',
	customResolve: '/docs/wundergraph-server-ts-reference/custom-resolve-hook',
	'onOriginRequest hook reference':
		'/docs/wundergraph-server-ts-reference/on-origin-request-hook',
	'onOriginRequest hook':
		'/docs/wundergraph-server-ts-reference/on-origin-request-hook',
	onOriginRequest:
		'/docs/wundergraph-server-ts-reference/on-origin-request-hook',
	'onOriginResponse hook reference':
		'/docs/wundergraph-server-ts-reference/on-origin-response-hook',
	'onOriginResponse hook':
		'/docs/wundergraph-server-ts-reference/on-origin-response-hook',
	onOriginResponse:
		'/docs/wundergraph-server-ts-reference/on-origin-response-hook',
	'postAuthentication hook reference':
		'/docs/wundergraph-server-ts-reference/post-authentication-hook',
	'postAuthentication hook':
		'/docs/wundergraph-server-ts-reference/post-authentication-hook',
	postAuthentication:
		'/docs/wundergraph-server-ts-reference/post-authentication-hook',
	'revalidate hook reference':
		'/docs/wundergraph-server-ts-reference/revalidate-hook',
	'revalidate hook': '/docs/wundergraph-server-ts-reference/revalidate-hook',
	revalidate: '/docs/wundergraph-server-ts-reference/revalidate-hook',
	'mutatingPostAuthentication hook reference':
		'/docs/wundergraph-server-ts-reference/mutating-post-authentication-hook',
	'mutatingPostAuthentication hook':
		'/docs/wundergraph-server-ts-reference/mutating-post-authentication-hook',
	mutatingPostAuthentication:
		'/docs/wundergraph-server-ts-reference/mutating-post-authentication-hook',
	authentication: '/docs/features/openid-connect-based-authentication',
	Authentication: '/docs/features/openid-connect-based-authentication',
	'supported DataSources': '/docs/supported-data-sources',
	DataSources: '/docs/supported-data-sources',
	'supported data sources': '/docs/supported-data-sources',
	'data sources': '/docs/supported-data-sources',
	'Apache Thrift': '/docs/supported-data-sources/apache-thrift',
	'Apollo Federation': '/docs/supported-data-sources/apollo-federation',
	Federation: '/docs/supported-data-sources/apollo-federation',
	federation: '/docs/supported-data-sources/apollo-federation',
	FaunaDB: '/docs/supported-data-sources/faunadb',
	'GraphQL DataSource': '/docs/supported-data-sources/graphql',
	GraphQL: '/docs/supported-data-sources/graphql',
	'gRPC DataSource': '/docs/supported-data-sources/grpc',
	gRPC: '/docs/supported-data-sources/grpc',
	'MongoDB / Atlas': '/docs/supported-data-sources/mongodb-atlas',
	'MongoDB Atlas': '/docs/supported-data-sources/mongodb-atlas',
	MongoDB: '/docs/supported-data-sources/mongodb-atlas',
	'MySQL DataSource': '/docs/supported-data-sources/mysql',
	MySQL: '/docs/supported-data-sources/mysql',
	'Neo4J DataSource': '/docs/supported-data-sources/neo4j',
	Neo4J: '/docs/supported-data-sources/neo4j',
	'OData DataSource': '/docs/supported-data-sources/odata',
	OData: '/docs/supported-data-sources/odata',
	'OracleDB DataSource': '/docs/supported-data-sources/oracle-db',
	OracleDB: '/docs/supported-data-sources/oracle-db',
	'Planetscale DataSource': '/docs/supported-data-sources/planetscale',
	Planetscale: '/docs/supported-data-sources/planetscale',
	'PostgreSQL DataSource': '/docs/supported-data-sources/postgresql',
	PostgreSQL: '/docs/supported-data-sources/postgresql',
	Postgres: '/docs/supported-data-sources/postgresql',
	'REST DataSource': '/docs/supported-data-sources/rest-openapi',
	REST: '/docs/supported-data-sources/rest-openapi',
	'REST / OpenAPI DataSource': '/docs/supported-data-sources/rest-openapi',
	'REST / OpenAPI': '/docs/supported-data-sources/rest-openapi',
	'OpenAPI DataSource': '/docs/supported-data-sources/rest-openapi',
	OpenAPI: '/docs/supported-data-sources/rest-openapi',
	'SOAP DataSource': '/docs/supported-data-sources/soap',
	SOAP: '/docs/supported-data-sources/soap',
	'SQLite DataSource': '/docs/supported-data-sources/sqlite',
	SQLite: '/docs/supported-data-sources/sqlite',
	'SQLServer DataSource': '/docs/supported-data-sources/sqlserver',
	'SQL Server': '/docs/supported-data-sources/sqlserver',
	SQLServer: '/docs/supported-data-sources/sqlserver',
	'Yugabyte DataSource': '/docs/supported-data-sources/yugabyte',
	Yugabyte: '/docs/supported-data-sources/yugabyte',
	'WunderGraph RPC Protocol':
		'/docs/architecture/wundergraph-rpc-protocol-explained',
	'WunderGraph Protocol':
		'/docs/architecture/wundergraph-rpc-protocol-explained',
	'Discord Server': 'https://wundergraph.com/discord',
	Discord: 'https://wundergraph.com/discord',
	EnvironmentVariables:
		'/docs/architecture/wundergraph-conventions#everything-you-need-to-know-about-using-environment-variables',
	'EnvironmentVariable class':
		'/docs/architecture/wundergraph-conventions#everything-you-need-to-know-about-using-environment-variables',
	EnvironmentVariable:
		'/docs/architecture/wundergraph-conventions#everything-you-need-to-know-about-using-environment-variables',
	'Default Environment Variables':
		'/docs/architecture/wundergraph-conventions#wundergraph-default-environment-variables',
	WG_LOG_LEVEL:
		'/docs/architecture/wundergraph-conventions#wundergraph-default-environment-variables',
	WG_NODE_URL:
		'/docs/architecture/wundergraph-conventions#wundergraph-default-environment-variables',
	WG_PUBLIC_NODE_URL:
		'/docs/architecture/wundergraph-conventions#wundergraph-default-environment-variables',
	WG_NODE_HOST:
		'/docs/architecture/wundergraph-conventions#wundergraph-default-environment-variables',
	WG_NODE_PORT:
		'/docs/architecture/wundergraph-conventions#wundergraph-default-environment-variables',
	WG_SERVER_URL:
		'/docs/architecture/wundergraph-conventions#wundergraph-default-environment-variables',
	WG_SERVER_HOST:
		'/docs/architecture/wundergraph-conventions#wundergraph-default-environment-variables',
	WG_SERVER_PORT:
		'/docs/architecture/wundergraph-conventions#wundergraph-default-environment-variables',
	'reach out to our Sales Team': 'https://wundergraph.com/contact/sales',
	'Sales Team': 'https://wundergraph.com/contact/sales',
	Sales: 'https://wundergraph.com/contact/sales',
	'WunderNode options':
		'/docs/wundergraph-config-ts-reference/configure-wundernode-options',
	'WunderGraph Server options':
		'/docs/wundergraph-server-ts-reference/configure-wundergraph-server-options',
	'headers configuration':
		'/docs/wundergraph-config-ts-reference/configure-headers-for-http-based-data-sources',
	'configure mTLS':
		'/docs/wundergraph-config-ts-reference/configure-mtls-for-http-based-data-sources',
	'configure introspection for protected API':
		'/docs/wundergraph-config-ts-reference/configure-introspection#introspection-of-protected-graph-ql-ap-is',
}

export default tags
