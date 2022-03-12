import React, { ReactNode } from "react";
import { QueryClient, QueryClientProvider as QCP } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const client = new QueryClient();

type Props = { children: ReactNode };

function QueryClientProvider({ children }: Props) {
  return (
    <QCP client={client}>
      {children}
      <ReactQueryDevtools />
    </QCP>
  );
}

export default QueryClientProvider;
