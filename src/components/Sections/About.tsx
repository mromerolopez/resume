import { FC, memo } from 'react';
import { aboutData, SectionId } from '../../data/data';
import Section from '../Layout/Section';

const About: FC = memo(() => {
  const { description, aboutItems } = aboutData;
  return (
    <Section sectionId={SectionId.About}>
      <h2>About me</h2>
      <p>{description}</p>
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
