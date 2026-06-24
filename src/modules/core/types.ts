export type EntityStatus = "active" | "inactive" | "archived";

export type CommercialSource =
  | "website_contact"
  | "website_quote"
  | "whatsapp"
  | "chatbot"
  | "manual"
  | "referral";

export type Metadata = Record<string, string | number | boolean | null | string[]>;

export type BaseEntity = {
  id: string;
  companyId: string;
  createdAt: string;
  updatedAt: string;
  createdBy?: string;
  updatedBy?: string;
  deletedAt?: string | null;
  status: EntityStatus;
  metadata?: Metadata;
};

export type Company = BaseEntity & {
  name: string;
  legalName?: string;
  taxId?: string;
  industry: string;
  email?: string;
  phone?: string;
};

export type UserProfile = BaseEntity & {
  fullName: string;
  email: string;
  role: "owner" | "admin" | "sales" | "operations";
};

export type AuditLog = {
  id: string;
  companyId: string;
  actorId?: string;
  entityType: string;
  entityId: string;
  action: "create" | "update" | "delete" | "status_change" | "convert";
  before?: Metadata;
  after?: Metadata;
  createdAt: string;
  metadata?: Metadata;
};
