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
import { ProfileSchema } from "@/lib/schemas/profile";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import z from "zod";
import { SelectInput, TextInput } from "@/components/form-inputs";
import { useSubmitProfile } from "@/hooks/useSubmitProfile";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";

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
  const [open, setOpen] = useState(false);

  const form = useForm<z.infer<typeof ProfileSchema>>({
    resolver: zodResolver(ProfileSchema),
  });

  const {
    submit,
    isMutating,
    data: recommendation,
    error,
  } = useSubmitProfile();

  async function onSubmit(values: z.infer<typeof ProfileSchema>) {
    try {
      await submit(values);
      form.reset();
      setOpen(true);
    } catch (e) {
      console.log("Mutation error:", e);
    }
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {error && !isMutating && (
            <p className="text-destructive text-center">{error.message}</p>
          )}
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Smart Life Insurance Guide</CardTitle>
              <CardDescription>
                Understand your options and get a personalized recommendation instantly
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
                  required={false}
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
              <Button type="submit" className="w-full" disabled={isMutating}>
                Submit
              </Button>
            </CardFooter>
          </Card>
        </form>
      </Form>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{recommendation?.title}</DialogTitle>
            <DialogDescription>{recommendation?.description}</DialogDescription>
          </DialogHeader>
          <DialogFooter className="sm:justify-end">
            <DialogClose asChild>
              <Button type="button" variant="secondary">
                OK
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
