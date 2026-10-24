export type OpeningDay = {
  closed: boolean;
  openingTime?: string | null;
  closingTime?: string | null;
};

export type OpeningHoursData = Partial<Record<
  "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday",
  OpeningDay | null
>>;

export type OpeningHoursState = {
  openingHours: OpeningHoursData | null;
  loading: boolean;
  error: string | null;
};
