import { Module } from '@nestjs/common';

import { DatabaseModule } from '../database/database.module';

import { SupplierCreateController } from './controllers/supplier-create.controller';
import { SupplierUpdateController } from './controllers/supplier-update.controller';
import { SupplierRemoveController } from './controllers/supplier-remove.controller';
import { SupplierListController } from './controllers/supplier-list.controller';
import { SupplierListSearchController } from './controllers/supplier-list-search.controller';

import { CategoryCreateController } from './controllers/category-create.controller';
import { CategoryUpdateController } from './controllers/category-update.controller';
import { CategoryRemoveController } from './controllers/category-remove.controller';
import { CategoryListController } from './controllers/category-list.controller';
import { CategoryListSearchController } from './controllers/category-list-search.controller';

import { ProductCreateController } from './controllers/product-create.controller';
import { ProductUpdateController } from './controllers/product-update.controller';
import { ProductRemoveController } from './controllers/product-remove.controller';
import { ProductListController } from './controllers/product-list.controller';

import { SupplierCreate } from '@domain/use-cases/supplier-create';
import { SupplierUpdate } from '@domain/use-cases/supplier-update';
import { SupplierRemove } from '@domain/use-cases/supplier-remove';
import { SupplierList } from '@domain/use-cases/supplier-list';
import { SupplierListSearch } from '@domain/use-cases/supplier-list-search';

import { CategoryCreate } from '@domain/use-cases/category-create';
import { CategoryUpdate } from '@domain/use-cases/category-update';
import { CategoryRemove } from '@domain/use-cases/category-remove';
import { CategoryList } from '@domain/use-cases/category-list';
import { CategoryListSearch } from '@domain/use-cases/category-list-search';

import { ProductCreate } from '@domain/use-cases/product-create';
import { ProductUpdate } from '@domain/use-cases/product-update';
import { ProductRemove } from '@domain/use-cases/product-remove';
import { ProductList } from '@domain/use-cases/product-list';

@Module({
  imports: [DatabaseModule],
  controllers: [
    SupplierCreateController,
    SupplierUpdateController,
    SupplierRemoveController,
    SupplierListController,
    SupplierListSearchController,

    CategoryCreateController,
    CategoryUpdateController,
    CategoryRemoveController,
    CategoryListController,
    CategoryListSearchController,

    ProductCreateController,
    ProductUpdateController,
    ProductRemoveController,
    ProductListController,
  ],
  providers: [
    SupplierCreate,
    SupplierUpdate,
    SupplierRemove,
    SupplierList,
    SupplierListSearch,

    CategoryCreate,
    CategoryUpdate,
    CategoryRemove,
    CategoryList,
    CategoryListSearch,

    ProductCreate,
    ProductUpdate,
    ProductRemove,
    ProductList,
  ],
})
export class HttpModule {}
