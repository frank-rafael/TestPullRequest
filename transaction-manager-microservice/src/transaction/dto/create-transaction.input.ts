import { InputType, Int, Field, ObjectType, Float } from '@nestjs/graphql';
import { IsInt, IsDecimal, Min, Max, IsOptional, IsString } from 'class-validator';
import { Decimal } from '@prisma/client/runtime';


@InputType()
export class CreateTransactionInput {
	@Field(() => String, {
		nullable: false,
		description: `Transaction's account external id debit`,
	})
	accountExternalIdDebit: string;

	@Field(() => String, {
		nullable: false,
		description: `Transaction's account external id debit`,
	})
	accountExternalIdCredit?: string;

	@Field(() => Number, { 
		nullable: false,
		description: `Transfer id` 
	})
	transferTypeId: number;

	@Field(() => Number, { 
		nullable: false,
		description: `Transaction's value` 
	})
	value: number;

}

