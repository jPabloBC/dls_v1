import type { BaseEntity, Metadata } from "@/modules/core/types";

export type AutomationRuleStatus = "draft" | "active" | "paused" | "disabled";

export type AutomationRule = Omit<BaseEntity, "status"> & {
  name: string;
  trigger: "lead_created" | "message_received" | "quote_sent" | "quote_expiring" | "task_overdue";
  conditions: Metadata;
  actions: Metadata;
  status: AutomationRuleStatus;
};
