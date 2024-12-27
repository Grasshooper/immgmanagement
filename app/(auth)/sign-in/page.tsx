import { SignInForm } from "@/components/auth/sign-in-form";
import { AuthLayout } from "@/components/auth/auth-layout";

export default function SignInPage() {
  return (
    <AuthLayout
      title="Sign In"
      description="Welcome back! Sign in to your account to continue."
    >
      <SignInForm />
    </AuthLayout>
  );
}