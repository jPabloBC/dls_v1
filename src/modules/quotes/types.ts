import type { BaseEntity } from "@/modules/core/types";

export type QuoteStatus = "draft" | "sent" | "accepted" | "rejected" | "expired";

export type Quote = Omit<BaseEntity, "status"> & {
  opportunityId: string;
  contactId: string;
  quoteNumber: string;
  title: string;
  subtotal: number;
  tax: number;
  total: number;
  currency: "CLP" | "USD";
  validUntil: string;
  status: QuoteStatus;
};

export type QuoteItem = BaseEntity & {
  quoteId: string;
  description: string;
  quantity: number;
  unit: "unit" | "hour" | "kg" | "meter" | "service";
  unitPrice: number;
  total: number;
};
