import { ExpandableSection } from '../components/ExpandableSection';
import data from '../data/academicData.json';

export function Academic() {
  return (
    <section className="container academic-page">
      <div className="page-header">
        <h1>Background</h1>
      </div>

      {data.main.map((item, index) => (
        <div className="experience-tab" key={`main-edu-${index}`}>
          <div className="experience-tab-inner">
            <div className="experience-tab-logo">
              {(item as { logo?: string }).logo ? (
                <img src={(item as { logo?: string }).logo} alt="" />
              ) : (
                <div className="experience-tab-logo-placeholder" aria-hidden>Logo</div>
              )}
            </div>
            <div className="experience-tab-body">
              <h3 className="tab-title">{item.title}</h3>
              <div className="experience-tab-header">
                <div className="experience-tab-organization">{item.organization}</div>
                <div className="experience-tab-date">{item.date}</div>
              </div>
              {item.details.length > 0 && (
                <ul className="tab-details">
                  {item.details.map((detail, dIndex) => (
                    <li key={`main-detail-${dIndex}`}>{detail}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      ))}

      <ExpandableSection>
        {data.expandable.map((item, index) => (
          <div className="experience-tab" key={`expand-edu-${index}`}>
            <div className="experience-tab-inner">
              <div className="experience-tab-logo">
                {(item as { logo?: string }).logo ? (
                  <img src={(item as { logo?: string }).logo} alt="" />
                ) : (
                  <div className="experience-tab-logo-placeholder" aria-hidden>Logo</div>
                )}
              </div>
              <div className="experience-tab-body">
                <h3 className="tab-title">{item.title}</h3>
                <div className="experience-tab-header">
                  <div className="experience-tab-organization">{item.organization}</div>
                  <div className="experience-tab-date">{item.date}</div>
                </div>
                <ul className="tab-details">
                  {item.details.map((detail, dIndex) => (
                    <li key={`expand-detail-${dIndex}`}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </ExpandableSection>
    </section>
  );
}
