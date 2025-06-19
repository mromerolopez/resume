import { FC, memo } from 'react';
import { education, experience, SectionId, skills } from '../../../data/data';
import Section from '../../Layout/Section';

const Resume: FC = memo(() => {
  return (
    <Section sectionId={SectionId.Resume}>
      <h2>Work</h2>
      <ul>
        {experience.map((item, index) => (
          <li key={`${item.title}-${index}`} style={{ marginBottom: '1.5rem' }}>
            <div><strong>{item.title}</strong> – {item.location}</div>
            <div style={{ fontSize: '0.95em', color: '#666' }}>{item.date}</div>
            <div>{item.content}</div>
          </li>
        ))}
      </ul>
      <h2>Education</h2>
      <ul>
        {education.map((item, index) => (
          <li key={`${item.title}-${index}`} style={{ marginBottom: '1.5rem' }}>
            <div><strong>{item.title}</strong> – {item.location}</div>
            <div style={{ fontSize: '0.95em', color: '#666' }}>{item.date}</div>
            <div>{item.content}</div>
          </li>
        ))}
      </ul>
      <h2>Skills</h2>
      <ul>
        {skills.map((skillgroup, index) => (
          <li key={`${skillgroup.name}-${index}`}>
            <strong>{skillgroup.name}:</strong> {skillgroup.skills.map(s => s.name).join(', ')}
          </li>
        ))}
      </ul>
    </Section>
  );
});

Resume.displayName = 'Resume';
export default Resume;
