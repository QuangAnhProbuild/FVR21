import FeatureItem from './FeatureItem'

import './Feature.css'

const features = [
  {
    id: 1,
    title: 'Premium Materials',
    description: `Our trombones use the shiniest brass which is sourced locally. This
    will increase the longevity of your purchase.`,
    icon: 'fire'
  },
  {
    id: 2,
    title: 'Fast Shipping',
    description: `We make sure you recieve your trombone as soon as we have finished
    making it. We also provide free returns if you are not satisfied.`,
    icon: 'truck'
  },
  {
    id: 3,
    title: 'Quality Assurance',
    description: `For every purchase you make, we will ensure there are no damages or
    faults and we will check and test the pitch of your instrument.`,
    icon: 'battery-full'
  }
]

const Features = () => {
  return (
    <section id='features'>
      {features.map(feature => (
        <FeatureItem key={feature.id} {...feature} />
      ))}
    </section>
  )
}

export default Features
