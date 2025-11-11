"use client";

import { useMounted } from "@/hooks/use-mounted";

function MountedProvider({ children }: { children: React.ReactNode }) {
  const mounted = useMounted();
  if (!mounted) {
    return <div>loader</div>;
  }
  return children;
}

export default MountedProvider;
