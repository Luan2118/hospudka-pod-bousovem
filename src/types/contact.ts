export type ContactData = {
  phoneNumber?: string | null;
  email?: string | null;
  facebookUrl?: string | null;
};

export type ContactContext = {
  contact: ContactData | null;
  loading: boolean;
  error: string | null;
};
