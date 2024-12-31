import { SignedIn, SignedOut } from "@clerk/remix";
import { Header } from "app/components/header";
import { useLoaderData } from "@remix-run/react";
import { createClient } from '@supabase/supabase-js';
import { LoaderFunctionArgs } from "@remix-run/cloudflare";

type Country = {
  id: number;
  name: string;
  iso2: string;
  iso3: string;
  local_name: string | null;
  continents: string | null;
};

export async function loader({ context }: LoaderFunctionArgs): Promise<{ countries: Country[]; }> {
  let env: Env;
  try {
    env = process.env as unknown as Env; // ローカルはnodeなのでprocess.env
  } catch {
    env = context.cloudflare.env as Env; // Cloudflare Pagesはcontext.cloudflare.env
  }

  if (!(env.SUPABASE_URL && env.SUPABASE_ANON_KEY)) {
    throw new Error("SUPABASE_URL or SUPABASE_ANON_KEY is not defined");
  }

  const client = createClient(
    env.SUPABASE_URL || "",
    env.SUPABASE_ANON_KEY || ""
  );

  const { data, error } = await client.from("countries").select("*");

  if (error) {
    throw error;
  }

  return {
    countries: data,
  };
}

export default function Index() {
  const countries = useLoaderData<typeof loader>();

  return (
    <div className="">
      <Header />
      <main>
        <SignedIn>
          {countries.countries.map((country) => {
            return (
              <div key={country.id}>
                {country.name}
              </div>
            );
          })}
        </SignedIn>
        <SignedOut>
          SignedOut!
        </SignedOut>
      </main>
    </div>
  );
}
