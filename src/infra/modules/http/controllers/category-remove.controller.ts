import { Controller, Delete, Param } from '@nestjs/common';

import { CategoryRemove } from '@domain/use-cases/category-remove';

@Controller('/categories')
export class CategoryRemoveController {
  constructor(private categoryRemove: CategoryRemove) {}

  @Delete(':id')
  async handle(@Param('id') id: string) {
    await this.categoryRemove.execute(id);
  }
}
