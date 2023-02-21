export interface IUseCreateForm {
  name: string;
  remarks: string;
  contents: string;
  price: number;
  tags?: string[];
  images?: string[];
  useditemAddress: {
    zipcode: string;
    address: string;
    addressDetail: string;
  };
}
export interface IUpdateProduct {
  name?: string;
  remarks?: string;
  contents?: string;
  price?: number;
  tags?: string[];
  images?: string[];

  useditemAddress?: {
    zipcode?: string;
    address?: string;
    addressDetail?: string;
  };
}
