import { Button } from "@/shared/components/ui/button";
import prisma from "@/shared/lib/db";



export default async function Home() {

const users = await prisma.user.findMany();

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
   <Button>Test</Button>
   <p>{users[0]?.id}</p>
    </div>
  );
}
