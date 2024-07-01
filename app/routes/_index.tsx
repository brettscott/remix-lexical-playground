import type { MetaFunction } from "@remix-run/node";
import { ClientOnly } from "~/remix/ClientOnly";
import App from "../.client/App";
import './../index.css';

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="font-sans p-4">
      <ClientOnly
        fallback={
          <div className="">Server-Side Render (SSR) placeholder...</div>
        }
      >
        {() => <App />}
      </ClientOnly>
    </div>
  );
}
