import { FC, memo } from 'react';
import { contact, SectionId } from '../../../data/data';
import Section from '../../Layout/Section';

const Contact: FC = memo(() => {
  const { headerText, description, items } = contact;
  return (
    <Section sectionId={SectionId.Contact}>
      <h2>{headerText}</h2>
      {description.map((desc: string, idx: number) => (
        <p key={idx}>{desc}</p>
      ))}
      <ul>
        {items.map(({ type, text, href }, idx) => (
          <li key={type + idx}>
            {href ? (
              <a href={href} target="_blank" rel="noopener noreferrer">{text}</a>
            ) : (
              <span>{text}</span>
            )}
          </li>
        ))}
      </ul>
    </Section>
  );
});

Contact.displayName = 'About';
export default Contact;
