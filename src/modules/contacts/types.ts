import type { BaseEntity, CommercialSource } from "@/modules/core/types";
import type { MessageChannel } from "@/modules/inbox/types";

export type ContactType = "person" | "company";

export type Contact = BaseEntity & {
  type: ContactType;
  name: string;
  companyName?: string;
  email?: string;
  phone?: string;
  preferredChannel: MessageChannel;
  source: CommercialSource;
  notes?: string;
};
