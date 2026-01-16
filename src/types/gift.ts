export type PurchaseLog = {
  name: string;
  email: string;
  title: string; 
  timestamp: string; 
};

export type Gift = {
  id:string;
  title: string;
  description: string;
  image: string;
  alias: string;
  link: string;
  purchased: boolean;
  copied: string | null;
};