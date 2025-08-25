import { ExpandableSection } from '../components/ExpandableSection';
import data from '../data/activitiesData.json';

export function Activities() {
  return (
    <>
      <section className="container">
        <div className="page-header">
          <h1>Societies</h1>
        </div>

        {data.societies.main.map((society, index) => (
          <div className="experience-tab" key={`society-main-${index}`}>
            <h3>{society.title}</h3>
            {society.roles.map((role, rIndex) => (
              <div key={`role-main-${rIndex}`}>
                <div className="experience-tab-header">
                  <div className="experience-tab-organization">{role.organization}</div>
                  <div className="experience-tab-date">{role.date}</div>
                </div>
                <ul>
                  {role.points.map((point, pIndex) => (
                    <li key={`point-main-${pIndex}`}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}
        
        <ExpandableSection>
          {data.societies.expandable.map((society, index) => (
            <div className="experience-tab" key={`society-expand-${index}`}>
              <h3>{society.title}</h3>
              {society.roles.map((role, rIndex) => (
                <div key={`role-expand-${rIndex}`}>
                  <div className="experience-tab-header">
                    <div className="experience-tab-organization">{role.organization}</div>
                    <div className="experience-tab-date">{role.date}</div>
                  </div>
                  <ul>
                    {role.points.map((point, pIndex) => (
                      <li key={`point-expand-${pIndex}`}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </ExpandableSection>
      </section>

      <section className="container">
        <div className="page-header">
          <h1>Community</h1>
        </div>
        <section className="masonry">
          {data.community.map((item, index) => (
            <div className="service-card" key={`community-${index}`}>
              <h3>{item.title}</h3>
              <div className="service-card-header">
                <div className="service-card-organization">{item.organization}</div>
                <div className="service-card-date">{item.date}</div>
              </div>
              {item.sections.map((section, sIndex) => (
                <div className="service-card-section" key={`section-${sIndex}`}>
                  <h4>{section.heading}</h4>
                  {section.content && <p>{section.content}</p>}
                  {section.points && (
                    <ul>
                      {section.points.map((point, pIndex) => (
                        <li key={`point-comm-${pIndex}`}>{point}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          ))}
        </section>
      </section>
    </>
  );
}
