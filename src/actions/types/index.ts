export interface SignupFormStateType {
  errors: {
    username?: string[];
    email?: string[];
    fullname?: string[];
    password?: string[];
    confirmpassword?: string[];
    _form?: string[];
  };
}

export interface SigninFormStateType {
  errors: {
    username?: string[];
    password?: string[];
    _form?: string[];
  };
}

export interface AddPetFormStateType {
  success: boolean;
  errors: {
    _form?: string[];
  };
}

export interface BookingStateType {
  errors: {
    petId?: string[];
    treatmentId?: string[];
    doctorId?: string[];
    slotId?: string[];
    _form?: string[];
  };
}
