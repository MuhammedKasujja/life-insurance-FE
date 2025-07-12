import { RecommendationForm } from "@/components/recommendation/recommendation-form";

export default function Home() {
  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center p-5 md:p-10">
      <main className="w-full max-w-sm md:max-w-3xl">
        <RecommendationForm />
      </main>
    </div>
  );
}
