import React from "react";
import ClientPage from "@/app/client/page";
import ServerPage from "@/app/server/page";

export default function Composition() {
  return <div>
    <ClientPage />
    <ServerPage />
  </div>;
}
