import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';


/* The PartialType() function returns a type (class) with all the properties of the input type set to optional */
export class UpdateProductDto extends PartialType(CreateProductDto) {

}
