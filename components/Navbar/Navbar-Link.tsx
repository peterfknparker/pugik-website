import Link from "next/link";
import { ReactNode } from "react";
import { useRouter } from "next/router";

type Props = {
  url: string;
  children: ReactNode;
};

const MenuItem = ({ url, children }: Props) => {
  const router = useRouter();
  return (
    <li>
      {router.pathname === url ? (
        <span className="font-bold">
          <span className="sr-only">Current Page: </span>
          {children}
        </span>
      ) : (
        <Link href={url}>
          <a className="font-medium">{children}</a>
        </Link>
      )}
    </li>
  );
};

export default MenuItem;
