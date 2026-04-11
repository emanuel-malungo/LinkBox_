import { z } from 'zod';

// Login Schema
export const loginSchema = z.object({
  email: z
    .email('Por favor, insira um email válido'),
  password: z
    .string({ message: 'Senha é obrigatória' })
    .min(6, 'Senha deve ter no mínimo 6 caracteres'),
});

// Signup Schema
export const signupSchema = z.object({
  email: z
    .email('Por favor, insira um email válido'),
  password: z
    .string({ message: 'Senha é obrigatória' })
    .min(6, 'Senha deve ter no mínimo 6 caracteres')
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      'Senha deve conter maiúsculas, minúsculas e números'
    ),
  confirmPassword: z
    .string({ message: 'Confirmação de senha é obrigatória' }),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'As senhas não correspondem',
  path: ['confirmPassword'],
});

// Forgot Password Schema
export const forgotPasswordSchema = z.object({
  email: z
    .email('Por favor, insira um email válido'),
});

// Export types inferred from schemas
export type LoginFormData = z.infer<typeof loginSchema>;
export type SignupFormData = z.infer<typeof signupSchema>;
export type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;