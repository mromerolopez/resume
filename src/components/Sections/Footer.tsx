import { FC, memo } from 'react';

const currentYear = new Date().getFullYear();

const Footer: FC = memo(() => (
  <footer style={{ width: '100%', textAlign: 'center', margin: '3rem 0 1.5rem 0', fontSize: '0.95rem', color: '#888' }}>
    <div>
      <div>Built with Next.js</div>
      <div>Inspired by the best in tech</div>
      <div>&copy; {currentYear} Miguel Romero</div>
    </div>
  </footer>
));

Footer.displayName = 'Footer';
export default Footer;
