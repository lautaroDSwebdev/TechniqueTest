"use client"
import styled from "styled-components";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query"
import { ComentsPage } from "@/ui/components/Coments";
export default function TanstackProvider({ children }: { children: React.ReactNode }) {
  const Query_c = new QueryClient()

  return (
    <QueryClientProvider client={Query_c}>
      <ComentsPage></ComentsPage>
    </QueryClientProvider>
  );
}
