import data from '../data/workData.json';
import { resolveLogo } from '../utils/logoResolver';

export function Work() {
  return (
    <section className="container work-page">
      <div className="section-block section-work">
        <div className="page-header">
          <h1>Work</h1>
        </div>

        {data.work.map((item, index) => {
          const logoSrc = resolveLogo(item.logo);
          return (
        <div className="experience-tab" key={`work-${index}`}>
          <div className="experience-tab-inner">
            {logoSrc && (
            <div className="experience-tab-logo">
              <img src={logoSrc} alt="" />
            </div>
            )}

            <div className="experience-tab-body">
              <h3>{item.title}</h3>
              <div className="experience-tab-header">
                <div className="experience-tab-organization">{item.organization}</div>
                <div className="experience-tab-date">{item.date}</div>
              </div>
              <ul>
                {item.points.map((point, pIndex) => (
                  <li key={`work-point-${pIndex}`}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
          );
        })}
      </div>

      <div className="section-block section-research">
        <div className="page-header">
          <h1>Research</h1>
        </div>

        {data.research.map((item, index) => {
          const logoSrc = resolveLogo(item.logo);
          return (
        <div className="experience-tab" key={`research-${index}`}>
          <div className="experience-tab-inner">
            {logoSrc && (
            <div className="experience-tab-logo">
              <img src={logoSrc} alt="" />
            </div>
            )}

            <div className="experience-tab-body">
              <h3>{item.title}</h3>
              <div className="experience-tab-header">
                <div className="experience-tab-organization">{item.organization}</div>
                <div className="experience-tab-date">{item.date}</div>
              </div>
              <ul>
                {item.points.map((point, pIndex) => (
                  <li key={`research-point-${pIndex}`}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
          );
        })}
      </div>

      <div className="section-block section-others">
        <div className="page-header">
          <h1>Others</h1>
        </div>

        {data.others.map((item, index) => {
          const logoSrc = resolveLogo(item.logo);
          return (
        <div className="experience-tab" key={`other-${index}`}>
          <div className="experience-tab-inner">
            {logoSrc && (
            <div className="experience-tab-logo">
              <img src={logoSrc} alt="" />
            </div>
            )}

            <div className="experience-tab-body">
              <h3>{item.title}</h3>
              <div className="experience-tab-header">
                <div className="experience-tab-organization">{item.organization}</div>
                <div className="experience-tab-date">{item.date}</div>
              </div>
              <ul>
                {item.points.map((point, pIndex) => (
                  <li key={`other-point-${pIndex}`}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
          );
        })}
      </div>
    </section>
  );
}
