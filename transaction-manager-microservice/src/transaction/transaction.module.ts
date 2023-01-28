import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { PrismaService } from 'prisma/prisma.service';
import { TransactionService } from './transaction.service';
import { TransactionResolver } from './transaction.resolver';
import { TransactionController } from './transaction.controller';

@Module({
	imports: [
		ClientsModule.register([
			{
				name: 'ANTIFRAUD_SERVICE',
				transport: Transport.KAFKA,
				options: {
					client: {
						clientId: 'antifraud',
						brokers: ['localhost:9092'],
					},
					consumer: {
						groupId: 'antifraud-consumer',
					},
					producer: {
						allowAutoTopicCreation: true,
					}
				},
			},
		]),
	],
	providers: [TransactionResolver, TransactionService, PrismaService],
	controllers: [TransactionController],
	exports: [TransactionResolver, TransactionService],
})

export class TransactionModule {}
