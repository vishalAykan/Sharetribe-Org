import React from 'react';
import { Heading, PropertyGroup } from '../../components';

import css from './ProfilePage.module.css';

const SectionMultiEnumMaybe = props => {
  const { heading, options, selectedOptions } = props;
  console.log({ props });
  if (!heading || !options || !selectedOptions) {
    return null;
  }

  return (
    <div className={css.sectionMultiEnum}>
      <Heading as="h2" rootClassName={css.sectionHeading}>
        {heading}
      </Heading>
      <PropertyGroup
        id="ListingPage.amenities"
        options={options}
        selectedOptions={selectedOptions}
        twoColumns={options.length > 5}
      />
    </div>
  );
};

export default SectionMultiEnumMaybe;
