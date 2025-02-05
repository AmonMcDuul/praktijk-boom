export interface Aanmelding {
    name: string;
    dateOfBirth: Date;
    telephone: string;
    email: string;
    selectedDate?: Date;
    selectedTime?: string;
    behandeling: string;
  }