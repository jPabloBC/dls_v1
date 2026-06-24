import type { BaseEntity, CommercialSource } from "@/modules/core/types";

export type LeadStatus = "new" | "contacted" | "qualified" | "converted" | "lost";

export type Lead = Omit<BaseEntity, "status"> & {
  contactId: string;
  source: CommercialSource;
  title: string;
  serviceInterest: string;
  projectLocation?: string;
  urgency: "low" | "medium" | "high" | "planning";
  status: LeadStatus;
  notes?: string;
};
