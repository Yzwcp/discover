import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
export default function Home() {
  return (
    <div className="flex flex-center">
      <div className="text-3xl font-bold text-indigo-500">chat discover</div>
      <Button>操作</Button>
      <UserButton showName></UserButton>
    </div>
  );
}