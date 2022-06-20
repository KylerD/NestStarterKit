import { PartialType } from '@nestjs/mapped-types';
import { CreateAppleDto } from './create-apple.dto';

/* The PartialType() function returns a type (class) with all the properties of the input type set to optional */
export class UpdateAppleDto extends PartialType(CreateAppleDto) {}
