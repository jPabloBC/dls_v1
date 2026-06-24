import type { BaseEntity } from "@/modules/core/types";

export type OpportunityStatus = "open" | "quoting" | "negotiation" | "won" | "lost" | "paused";

export type TaskStatus = "pending" | "in_progress" | "completed" | "cancelled" | "overdue";

export type Opportunity = Omit<BaseEntity, "status"> & {
  contactId: string;
  leadId?: string;
  title: string;
  estimatedValue: number;
  expectedCloseDate?: string;
  stage: "qualification" | "technical_review" | "quote_sent" | "follow_up" | "closed";
  status: OpportunityStatus;
};

export type CommercialTask = Omit<BaseEntity, "status"> & {
  contactId?: string;
  leadId?: string;
  opportunityId?: string;
  assignedTo?: string;
  title: string;
  dueAt: string;
  priority: "low" | "medium" | "high";
  status: TaskStatus;
};
