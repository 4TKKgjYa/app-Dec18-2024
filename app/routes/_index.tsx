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
  const client = createClient(
    "https://ikcorsyuoetdfhnpmvqq.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlrY29yc3l1b2V0ZGZobnBtdnFxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU0MjMyMzYsImV4cCI6MjA1MDk5OTIzNn0.8meP5n132pcnVEWHAq7r4881QOX28skEi1W0Potc5NI"
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
