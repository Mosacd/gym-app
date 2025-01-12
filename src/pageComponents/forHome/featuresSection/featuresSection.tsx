import { containerClass, featureClass, iconClass, sectionClass, titleClass } from "./featuresSection.styles";
import { features } from "./featuresSection.data";

const FeaturesSection: React.FC = () => {
  return (
    <section className={sectionClass()}>
      <div className={containerClass()}>
        {features.map((feature, index) => (
          <div key={index} className={featureClass()}>
            <div className={iconClass()}>{feature.icon}</div>
            <h3 className={titleClass()}>{feature.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
