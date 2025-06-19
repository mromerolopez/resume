import { FC, memo } from 'react';
import { meData, SectionId } from '../../data/data';
import Section from '../Layout/Section';

const Hero: FC = memo(() => {
  const { name, description, actions } = meData;

  return (
    <Section sectionId={SectionId.Me}>
      <h1>{name}</h1>
      <div>{description}</div>
      <div style={{ margin: '2rem 0' }}>
        {actions.map(({ href, text, target }) => (
          <a
            href={href}
            key={text}
            target={target}
            rel={target === '_blank' ? 'noopener noreferrer' : undefined}
            style={{ marginRight: '1.5rem' }}
          >
            {text}
          </a>
        ))}
      </div>
    </Section>
  );
});

Hero.displayName = 'Hero';
export default Hero;
