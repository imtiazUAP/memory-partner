import type { NextPage } from 'next';
import Link from 'next/link';

const Header: NextPage = () => {
  return (
    <div className="layout-header">
      <Link key={1} href="/">
        Memory Partner
      </Link>
    </div>
  );
};

export default Header;
