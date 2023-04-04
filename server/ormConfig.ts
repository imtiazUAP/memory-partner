
import { DataSource } from 'typeorm';
import { Memories } from './entities/memories.entity';
import { Users } from './entities/users.entity';
import { CreateMemories1680608251780 } from './migrations/1680608251780-Create_Memories';

 
const dataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3307,
  database: 'memoryPartnerDb',
  username: 'root',
  password: 'root',
  entities: [Memories, Users],
  migrations: [CreateMemories1680608251780],
  synchronize: false,
});

export default dataSource;