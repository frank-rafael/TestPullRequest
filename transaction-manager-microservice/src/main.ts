import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	const configService = app.get(ConfigService);

	const port = configService.get('API_PORT');
	const broker = configService.get('KAFKA_BROKER');

	console.log('KAFKA_BROKER', broker);

	app.connectMicroservice({
		transport: Transport.KAFKA,
		options: {
			client: {
				brokers: [broker],
			},
			consumer: {
				groupId: 'transaction-consumer',
			},
		},
	});

	app.startAllMicroservices();

	await app.listen(port);
}

bootstrap();
