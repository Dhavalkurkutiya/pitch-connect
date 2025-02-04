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
        const fieldErorrs = error.flatten().fieldErrors;

        setErrors(fieldErorrs as unknown as Record<string, string>);

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
    <Card className="max-w-3xl mx-auto p-6 space-y-6 mt-4">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-50">
          Submit Your Startup
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Share your innovative idea with the community
        </p>
      </div>

      <form action={formAction} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="title" className="text-gray-700">
              Title
            </Label>
            <Input
              id="title"
              name="title"
              className="focus:ring-2 focus:ring-blue-500"
              required
              placeholder="Startup Title"
              aria-describedby="title-error"
            />
            {errors.title && (
              <p id="title-error" className="text-red-600 text-sm mt-1">
                {errors.title}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="category" className="text-gray-700">
              Category
            </Label>
            <Input
              id="category"
              name="category"
              className="focus:ring-2 focus:ring-blue-500"
              required
              placeholder="Tech, Health, Education..."
              aria-describedby="category-error"
            />
            {errors.category && (
              <p id="category-error" className="text-red-600 text-sm mt-1">
                {errors.category}
              </p>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="description" className="text-gray-700">
            Description
          </Label>
          <Textarea
            id="description"
            name="description"
            className="min-h-[100px] focus:ring-2 focus:ring-blue-500"
            required
            placeholder="Brief description of your startup"
            aria-describedby="description-error"
          />
          {errors.description && (
            <p id="description-error" className="text-red-600 text-sm mt-1">
              {errors.description}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="link" className="text-gray-700">
            Image URL
          </Label>
          <Input
            id="link"
            name="link"
            className="focus:ring-2 focus:ring-blue-500"
            required
            placeholder="https://example.com/image.jpg"
            aria-describedby="link-error"
          />
          {errors.link && (
            <p id="link-error" className="text-red-600 text-sm mt-1">
              {errors.link}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="pitch" className="text-gray-700">
            Pitch
          </Label>
          <div className="border rounded-lg overflow-hidden shadow-sm focus-within:ring-2 focus-within:ring-blue-500">
            <MDEditor
              value={pitch}
              onChange={(value) => setPitch(value as string)}
              id="pitch"
              preview="edit"
              height={300}
              style={{ borderRadius: 0 }}
              textareaProps={{
                "aria-describedby": "pitch-error",
                placeholder: "Explain your idea, target market, and unique value proposition...",
              }}
              previewOptions={{
                disallowedElements: ["style"],
              }}
            />
          </div>
          {errors.pitch && (
            <p id="pitch-error" className="text-red-600 text-sm mt-1">
              {errors.pitch}
            </p>
          )}
        </div>

        <div className="flex justify-end">
          <Button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded-lg flex items-center gap-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isPending}
            aria-busy={isPending}
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
