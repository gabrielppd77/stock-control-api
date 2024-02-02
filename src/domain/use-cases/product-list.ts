import { Injectable, BadRequestException } from '@nestjs/common';

import { ProductRepository } from '@domain/repositories/product.repository';
import { Product } from '@domain/entities/product';

interface Request {
  filters: {
    supplierId?: string;
    categoryId?: string;
    dtEntryInitial?: string;
    dtEntryEnd?: string;
    dtDepartureInitial?: string;
    dtDepartureEnd?: string;
    nrClient?: string;
    fiscalNoteEntry?: string;
    fiscalNoteDeparture?: string;
    onlyUnavaibles?: boolean;
  };
}

interface Response {
  products: Product[];
}

@Injectable()
export class ProductList {
  constructor(private productRepository: ProductRepository) {}

  async execute(req: Request): Promise<Response> {
    const { filters } = req;
    const {
      supplierId,
      categoryId,
      dtEntryInitial,
      dtEntryEnd,
      dtDepartureInitial,
      dtDepartureEnd,
      nrClient,
      fiscalNoteEntry,
      fiscalNoteDeparture,
      onlyUnavaibles,
    } = filters;

    if ((dtEntryInitial && !dtEntryEnd) || (!dtEntryInitial && dtEntryEnd)) {
      throw new BadRequestException('Date entry filter has incomplent');
    }

    if (
      (dtDepartureInitial && !dtDepartureEnd) ||
      (!dtDepartureInitial && dtDepartureEnd)
    ) {
      throw new BadRequestException('Date departure filter has incomplent');
    }

    const dtEntryFilter =
      dtEntryInitial && dtEntryEnd
        ? { dtInitial: dtEntryInitial, dtEnd: dtEntryEnd }
        : undefined;
    const dtDepartureFilter =
      dtDepartureInitial && dtDepartureEnd
        ? { dtInitial: dtDepartureInitial, dtEnd: dtDepartureEnd }
        : undefined;

    const products = await this.productRepository.getAll({
      supplierId,
      categoryId,
      dtEntryFilter,
      dtDepartureFilter,
      nrClient,
      fiscalNoteEntry,
      fiscalNoteDeparture,
      onlyUnavaibles,
    });
    return { products };
  }
}