import { ObjectType, Field, Int, Scalar, Float } from '@nestjs/graphql';
import { Transaction as TransactionClient} from '@prisma/client';

@ObjectType()
export class TransactionStatus {
	@Field({ nullable: true })
	idStatus: number;

	@Field({ nullable: true })
	name: string;
}

@ObjectType()
export class TransactionType {
	@Field({ nullable: true })
	idType: number;

	@Field({ nullable: true })
	name: string;
}

@ObjectType()
export class Transaction implements TransactionClient {

	@Field(() => String, {
		nullable: false,
		defaultValue: '',
	})
	accountExternalIdDebit: string;

	@Field(() => String, {
		nullable: false,
		defaultValue: '',
	})
	accountExternalIdCredit: string;

	@Field(() => Number, {
		nullable: false,
		defaultValue: 1,
	})
	transferTypeId: number;


	@Field(() => Number, {
		nullable: false,
		defaultValue: 0,
	})
	value: number;

	@Field(() => String)
	createdAt: Date;

	@Field(() => String)
	updatedAt: Date;

	@Field(() => String)
	transactionExternalId: string;

	@Field(() => Number)
	transactionStatusId: number;

	@Field(() => Number)
	transactionTypeId: number;

	@Field(() => TransactionStatus, { nullable: true })
	transactionStatus: TransactionStatus;

	@Field(() => TransactionType, { nullable: true })
	transactionType: TransactionType;

}

