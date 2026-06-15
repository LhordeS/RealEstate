export function getFilteredProperties(state) {
  return state.properties.filter(p => {
    return (
      p.address.toLowerCase().includes(state.filters.keyword.toLowerCase()) &&
      p.price >= state.filters.minPrice &&
      p.price <= state.filters.maxPrice &&
      p.yield >= state.filters.minYield
    );
  });
}
