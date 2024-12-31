import { SignedIn, SignedOut } from "@clerk/remix";
import { Header } from "app/components/header";
import { useLoaderData } from "@remix-run/react";
import { createClient } from '@supabase/supabase-js';

type Country = {
  id: number;
  name: string;
  iso2: string;
  iso3: string;
  local_name: string | null;
  continents: string | null;
};

export async function loader(): Promise<{ countries: Country[]; }> {
  console.log("import.meta.env.SUPABASE_URL: ", import.meta.env.SUPABASE_URL)
  console.log("import.meta.env.SUPABASE_ANON_KEY: ", import.meta.env.SUPABASE_ANON_KEY)
  const client = createClient(
    import.meta.env.SUPABASE_URL,
    import.meta.env.SUPABASE_ANON_KEY
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

  console.log(countries);
  
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
