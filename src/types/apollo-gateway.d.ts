declare module '@apollo/gateway' {
	export type GatewayConfig = any;
	export interface ServiceEndpointDefinition {
		name: string;
		url: string;
	}
}

declare module '@apollo/gateway/src/datasources/types' {
	export interface GraphQLDataSource<TContext = any> {
		process<TContext>(requestContext: any): Promise<any>;
	}
} 