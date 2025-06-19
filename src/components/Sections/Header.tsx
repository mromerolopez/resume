import { FC, memo } from 'react';
import Link from 'next/link';
import { SectionId } from '../../data/data';

const navSections = [SectionId.About, SectionId.Resume, SectionId.Contact];

const Header: FC = memo(() => {
  return (
    <header style={{ width: '100%', padding: '2rem 0', textAlign: 'center' }}>
      <nav>
        {navSections.map((section, idx) => (
          <span key={section}>
            <Link href={`/#${section}`}>{section}</Link>
            {idx < navSections.length - 1 && ' | '}
          </span>
        ))}
      </nav>
    </header>
  );
});

export const headerID = 'Header';
export default Header;
