import type { BaseEntity, CommercialSource } from "@/modules/core/types";

export type MessageChannel = "website" | "email" | "phone" | "whatsapp" | "chatbot" | "manual";

export type MessageStatus = "unread" | "read" | "archived" | "converted";

export type Conversation = Omit<BaseEntity, "status"> & {
  contactId: string;
  leadId?: string;
  opportunityId?: string;
  channel: MessageChannel;
  source: CommercialSource;
  status: "open" | "waiting_customer" | "closed";
  lastMessageAt: string;
};

export type InboxMessage = Omit<BaseEntity, "status"> & {
  conversationId: string;
  contactId: string;
  channel: MessageChannel;
  direction: "inbound" | "outbound";
  subject?: string;
  body: string;
  receivedAt: string;
  status: MessageStatus;
};
