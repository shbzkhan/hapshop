export interface LoginProps {
  email: string;
  otp: string;
}
export interface RegisterProps extends LoginProps {
  fullname: string;
}
