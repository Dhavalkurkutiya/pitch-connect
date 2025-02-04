"use client";

import React, { useState, useActionState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import MDEditor from "@uiw/react-md-editor";
import { Button } from "@/components/ui/button";
import { Send, SpaceIcon } from "lucide-react";
import { formSchema } from "@/lib/validation";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { createPitch } from "@/lib/actions";
import { Card } from "./ui/card";
import { Label } from "./ui/label";

const StartupForm = () => {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [pitch, setPitch] = useState("");
  const { toast } = useToast();
  const router = useRouter();

  const handleFormSubmit = async (prevState: any, formData: FormData) => {
    try {
      const formValues = {
        title: formData.get("title") as string,
        description: formData.get("description") as string,
        category: formData.get("category") as string,
        link: formData.get("link") as string,
        pitch,
      };

      await formSchema.parseAsync(formValues);

      const result = await createPitch(prevState, formData, pitch);

      if (result.status == "SUCCESS") {
        toast({
          title: "Success",
          description: "Your startup pitch has been created successfully",
        });

        router.push(`/startup/${result._id}`);
      }

      return result;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors = error.flatten().fieldErrors;
        setErrors(fieldErrors as unknown as Record<string, string>);

        toast({
          title: "Error",
          description: "Please check your inputs and try again",
          variant: "destructive",
        });

        return { ...prevState, error: "Validation failed", status: "ERROR" };
      }

      toast({
        title: "Error",
        description: "An unexpected error has occurred",
        variant: "destructive",
      });

      return {
        ...prevState,
        error: "An unexpected error has occurred",
        status: "ERROR",
      };
    }
  };

  const [state, formAction, isPending] = useActionState(handleFormSubmit, {
    error: "",
    status: "INITIAL",
  });

  return (
    <Card className="max-w-4xl mx-auto p-6 space-y-6 mt-4 w-full md:w-[90%] lg:w-[80%]">
      <div className="space-y-2 text-center">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-50">
          Submit Your Startup
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base">
          Share your innovative idea with the community
        </p>
      </div>

      <form action={formAction} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              name="title"
              className="w-full focus:ring-2 focus:ring-blue-500"
              required
              placeholder="Startup Title"
            />
            {errors.title && <p className="text-red-600 text-sm">{errors.title}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="category">Category</Label>
            <Input
              id="category"
              name="category"
              className="w-full focus:ring-2 focus:ring-blue-500"
              required
              placeholder="Tech, Health, Education..."
            />
            {errors.category && <p className="text-red-600 text-sm">{errors.category}</p>}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            name="description"
            className="w-full min-h-[100px] focus:ring-2 focus:ring-blue-500"
            required
            placeholder="Brief description of your startup"
          />
          {errors.description && <p className="text-red-600 text-sm">{errors.description}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="link">Image URL</Label>
          <Input
            id="link"
            name="link"
            className="w-full focus:ring-2 focus:ring-blue-500"
            required
            placeholder="https://example.com/image.jpg"
          />
          {errors.link && <p className="text-red-600 text-sm">{errors.link}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="pitch">Pitch</Label>
          <div className="border rounded-lg overflow-hidden shadow-sm focus-within:ring-2 focus-within:ring-blue-500">
            <MDEditor
              value={pitch}
              onChange={(value) => setPitch(value as string)}
              id="pitch"
              preview="edit"
              height={250}
              style={{ borderRadius: 0 }}
              textareaProps={{
                placeholder: "Explain your idea, target market, and unique value proposition...",
              }}
            />
          </div>
          {errors.pitch && <p className="text-red-600 text-sm">{errors.pitch}</p>}
        </div>

        <div className="flex justify-center">
          <Button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded-lg flex items-center gap-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isPending}
          >
            {isPending ? (
              <>
                <SpaceIcon className="h-5 w-5 animate-spin" />
                <span>Submitting...</span>
              </>
            ) : (
              <>
                <span>Submit Pitch</span>
                <Send className="h-5 w-5" />
              </>
            )}
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default StartupForm;
