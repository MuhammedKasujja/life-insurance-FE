"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { recommendationSchema } from "@/lib/schemas/recommendation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import z from "zod";
import { SelectInput, TextInput } from "@/components/form-inputs";

const riskToleranceList = [
  {
    label: "Low",
    value: "low",
  },
  {
    label: "Medium",
    value: "medium",
  },
  {
    label: "High",
    value: "high",
  },
] as const;

export function RecommendationForm() {
  const form = useForm<z.infer<typeof recommendationSchema>>({
    resolver: zodResolver(recommendationSchema),
  });

  function onSubmit(values: z.infer<typeof recommendationSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Login to your account</CardTitle>
            <CardDescription>
              Enter your email below to login to your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-5">
              <TextInput
                control={form.control}
                label="Age"
                name={"age"}
                type={"number"}
                placeholder=""
              />
              <TextInput
                control={form.control}
                label="Income"
                name={"income"}
                type={"number"}
                placeholder=""
              />
              <TextInput
                control={form.control}
                label="Number of Dependents"
                name={"numDependents"}
                type={"number"}
                placeholder=""
              />
              <SelectInput
                control={form.control}
                label="Risk Tolerance"
                name={"riskTolerance"}
                placeholder=""
                options={riskToleranceList}
              />
            </div>
          </CardContent>
          <CardFooter className="flex-col gap-2">
            <Button type="submit" className="w-full">
              Submit
            </Button>
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
}
