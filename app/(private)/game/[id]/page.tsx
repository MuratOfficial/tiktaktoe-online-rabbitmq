import { Game } from "@/features/game/server";
import { Button } from "@/shared/components/ui/button";
import Link from "next/link";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <main className="flex flex-col grow pt-24 w-full max-w-100 mx-auto">
      <div className="w-full flex flex-row justify-start pb-4">
        <Button>
          <Link href="/">
          Выйти
          </Link>
        
      </Button>
      </div>
      
      <Game gameId={id} />
    </main>
  );
}