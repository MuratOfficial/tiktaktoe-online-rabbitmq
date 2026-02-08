"use client";


import { Button } from "@/shared/components/ui/button";
import { createGameAction } from "../actions/create-game";

import { mapLeft, right } from "@/shared/lib/either";
import { startTransition} from "react";
import { useActionState } from "@/shared/lib/react";

export function CreateButton() {
  const [state, dispatch, isPending] = useActionState(
    createGameAction,
    right(undefined),
  );

  return (
<Button
  disabled={isPending}
  onClick={() => startTransition(dispatch)}
  error={
    state 
      ? mapLeft(state, (e) => {
          // Приводим e к string для использования как ключа объекта
          const errorKey = e as string;
          const errorMessages: Record<string, string> = {
            "can-create-only-one-game": "Вы можете создать только одну игру",
            "user-not-found": "Пользователя нету",
          };
          
          return errorMessages[errorKey] || "Неизвестная ошибка";
        })
      : undefined
  }
>
  Создать игру
</Button>
  );
}