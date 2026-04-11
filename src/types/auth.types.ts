// Login Form
export interface LoginFormData {
  email: string;
  password: string;
}

// Signup Form
export interface SignupFormData {
  email: string;
  password: string;
  confirmPassword: string;
}

// Auth Response
export interface AuthResponse {
  success: boolean;
  message: string;
  token?: string;
  user?: {
    id: string;
    email: string;
    name?: string;
  };
}

// Auth Error
export interface AuthError {
  field?: keyof LoginFormData | keyof SignupFormData;
  message: string;
}

// Forgot Password Form
export interface ForgotPasswordFormData {
  email: string;
}

// Reset Password Form
export interface ResetPasswordFormData {
  password: string;
  confirmPassword: string;
  token: string;
}
