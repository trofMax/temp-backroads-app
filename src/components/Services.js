import { services } from '../data';

import Service from './Service';
import Title from './Title';

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title="our" subTitle="services" />

      <div className="section-center services-center">
        {services.map((service) => (
          <Service {...service} key={service.id} />
        ))}
      </div>
    </section>
  );
};
export default Services;
