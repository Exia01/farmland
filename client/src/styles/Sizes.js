const sizeOBj = {
  // from small and up
  up(size) {
    const sizes = {
      xs: '576px',
      sm: '768px',
      md: '992px',
      lg: '1200px',
      xl: '1400px',
    };
    return `@media (min-width: ${sizes[size]}) `;
  },

  // small and below
  down(size) {
    // Takes in size and returns string with the size combined
    const sizes = {
      xs: '575.98px',
      sm: '767.98px',
      md: '991.98px',
      lg: '1199.98px',
      xl: '1600px',
    };
    return `@media (max-width: ${sizes[size]}) `;
  },
};

export default sizeOBj;
