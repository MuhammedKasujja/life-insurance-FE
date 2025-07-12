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
import { useSubmitProfile } from "@/hooks/useSubmitProfile";

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

  const { submit, isMutating, data, error } = useSubmitProfile();

  async function onSubmit(values: z.infer<typeof recommendationSchema>) {
    console.log(values);
    await submit({ ...values });
    console.log("Data submitted", data);
    console.log("Data Error", error);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Smart Life Insurance Guide</CardTitle>
            <CardDescription>
              Understand your options and get a personalized recommendation in
              minutes
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
                name={"numOfDependants"}
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
