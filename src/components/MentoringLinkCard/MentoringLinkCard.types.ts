import { ReactNode } from "react";

export type Props = {
  avatar?: string;
  name: string;
  id?: string;
  job: string;
  date: any;
  hour: any;
  status: string;
  meetingLink?: string;
  eventId: string;
};

export type StatusToVariantMap = {
  [key: string]: "primary" | "secondary" | "tertiary";
};
