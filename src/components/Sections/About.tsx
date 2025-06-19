import { FC, memo } from 'react';
import { aboutData, SectionId } from '../../data/data';
import Section from '../Layout/Section';
import OptimizedImage from '../OptimizedImage';

const About: FC = memo(() => {
  const { description, aboutItems, profileImageSrc } = aboutData;
  return (
    <Section sectionId={SectionId.About}>
      <h2>About me</h2>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '2rem', marginBottom: '2rem' }}>
        {profileImageSrc && (
          <OptimizedImage
            src={profileImageSrc}
            alt="Miguel Romero - Full Stack Engineer and Team Lead"
            width={120}
            height={120}
            priority={true}
            style={{
              borderRadius: '50%',
              objectFit: 'cover',
              flexShrink: 0
            }}
          />
        )}
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
