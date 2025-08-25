import data from '../data/workData.json';

export function Work() {
  return (
    <section className="container">
      <div className="page-header">
        <h1>Work</h1>
      </div>

      {data.work.map((item, index) => (
        <div className="experience-tab" key={`work-${index}`}>
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
      ))}
      
      <div className="page-header">
        <h1>Research</h1>
      </div>

      {data.research.map((item, index) => (
        <div className="experience-tab" key={`research-${index}`}>
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
      ))}

      <div className="page-header">
        <h1>Others</h1>
      </div>

      {data.others.map((item, index) => (
        <div className="experience-tab" key={`other-${index}`}>
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
      ))}
    </section>
  );
}
