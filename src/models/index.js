// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { List, Todo } = initSchema(schema);

export {
  List,
  Todo
};