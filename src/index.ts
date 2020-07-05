export interface WebhookEvent {
  email: string;
  timestamp: number;
  event: WebhookEventType;
  'smtp-id'?: string;
  useragent?: string;
  ip?: string;
  sg_event_id?: string;
  sg_message_id?: string;
  reason?: string;
  status?: string;
  response?: string;
  tls?: boolean;
  url?: string;
  category?: string | string[];
  type?: string;
  asm_group_id?: string;
  [ref: string]: any;
}

export type WebhookEventType =
  | 'processed'
  | 'dropped'
  | 'delivered'
  | 'deferred'
  | 'bounce'
  | 'open'
  | 'click'
  | 'spam report'
  | 'unsubscribe'
  | 'group unsubscribe'
  | 'group resubscribe';
