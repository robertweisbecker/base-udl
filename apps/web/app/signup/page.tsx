import { SignupForm } from "@/components/signup-form";
import LoggedOutHeader from "@/components/logged-out-header";
import FooterSection from "@/components/footer-four";

export default function SignupPage() {
  return (
    <div className="flex min-h-svh flex-col">
      <LoggedOutHeader />
      <main className="flex flex-1 flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
        <div className="flex w-full max-w-sm flex-col gap-6">
          <SignupForm />
        </div>
      </main>
      <FooterSection />
    </div>
  );
}
