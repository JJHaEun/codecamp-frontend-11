export interface IUseCreateForm {
  name?: string;
  remarks?: string;
  contents?: string;
  price?: number | string;
  tags?: string;
  images?: string[];
  useditemAddress: {
    zipcode: string;
    address: string;
    addressDetail?: string;
  };
}
export interface IUpdateProduct {
  name?: string;
  remarks?: string;
  contents?: string;
  price: number | string;
  tags?: string[];
  images?: string[];

  useditemAddress?: {
    zipcode?: string;
    address?: string;
    addressDetail?: string;
  };
}
