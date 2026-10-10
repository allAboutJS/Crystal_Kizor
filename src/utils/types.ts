export interface Initiative {
  id: string;
  index: string;
  discipline: string;
  title: string;
  lead: string;
  description: string;
  image?: string;
  quote?: {
    motif: string;
    heading: string;
    text: string;
    isDark?: boolean;
  };
  tags: string[];
  actionLabel: string;
  actionIntent: string;
  reverse?: boolean;
}

export interface VisitorPath {
  id: string;
  title: string;
  description: string;
  actionLabel: string;
  actionIntent: string;
}

export interface InquiryFormData {
  intent: string;
  name: string;
  email: string;
  message: string;
}
