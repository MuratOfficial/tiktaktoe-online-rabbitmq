
import { Alert, AlertDescription } from "@/shared/components/ui/alert";
import React from "react";

export function ErrorMessage({ error }: { error?: string }) {
  if (error) {
    return (
      <Alert variant="destructive">
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    );
  }
  return null;
}