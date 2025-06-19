import { FC, memo } from 'react';
import { aboutData, SectionId } from '../../data/data';
import Section from '../Layout/Section';

const About: FC = memo(() => {
  const { description, aboutItems } = aboutData;
  return (
    <Section sectionId={SectionId.About}>
      <h2>About me</h2>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '2rem', marginBottom: '2rem' }}>
        <p>{description}</p>
      </div>
      <ul>
        {aboutItems.map(({ label, text }, idx) => (
          <li key={idx}>
            <strong>{label}:</strong> {text}
          </li>
        ))}
      </ul>
    </Section>
  );
});

About.displayName = 'About';
export default About;
