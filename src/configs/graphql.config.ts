import config from 'config';
import { GqlModuleOptions } from '@nestjs/graphql';

const configs = config.get('graphql');

export default {
  ...configs,
  cors: true,
  autoSchemaFile: true,
  context: ({ req, connection }) =>
    connection ? { req: connection.context } : { req },
} as GqlModuleOptions;
