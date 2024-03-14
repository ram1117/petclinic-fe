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
