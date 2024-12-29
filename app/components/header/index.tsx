import { useState } from "react";
import { ResponsiveMenu } from "app/components/ResponsiveMenu";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <ResponsiveMenu menuOpen={menuOpen} onClickMenuOpen={setMenuOpen} />
    </header>
  );
}
