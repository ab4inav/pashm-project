"use client";

import dynamic from "next/dynamic";

const FabricMesh = dynamic(() => import("./FabricMesh"), {
  ssr: false,
  loading: () => null,
});

export default function FabricMeshWrapper() {
  return <FabricMesh />;
}
