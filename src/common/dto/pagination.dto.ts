import { IsOptional, IsPositive, Min } from "class-validator";

export class PaginationDto {

    @IsOptional()
    @IsPositive()
    @Min(1)
    limit?: number;

    @IsOptional()
    @IsPositive()
    offset?: number;

    // Custom method to validate the limit and offset
    // validate() {
    //     if (this.limit && (this.limit < 0 || this.limit > 100)) {
    //         throw new Error('Limit must be between 0 and 100');
    //     }
    //     if (this.offset && this.offset < 0) {
    //         throw new Error('Offset must be a non-negative number');
    //     }
    // }



}