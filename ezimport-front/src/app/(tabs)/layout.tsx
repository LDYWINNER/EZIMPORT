import TabBar from "@/components/tab-bar";
import { Toaster } from "@/components/ui/sonner";

export default function TabLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <TabBar children={children} />
      <Toaster richColors />
    </div>
  );
}
