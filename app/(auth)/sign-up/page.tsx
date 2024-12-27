import { SignUpForm } from "@/components/auth/sign-up-form";
import { AuthLayout } from "@/components/auth/auth-layout";

export default function SignUpPage() {
  return (
    <AuthLayout
      title="Create an Account"
      description="Get started with our immigration management portal."
    >
      <SignUpForm />
    </AuthLayout>
  );
}