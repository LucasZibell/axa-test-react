export default (list, { name, age, wantedFriend, hairColor, height, wantedProfession, weight }) => {
  const filtersToApply = [
    ...(name ? [elem => elem.name.includes(name)] : []),
    ...(age ? [elem => elem.age === age] : []),
    ...(wantedFriend ? [elem => elem.friends.some(friend => friend.includes(wantedFriend))] : []),
    ...(hairColor ? [elem => elem.hair_color.includes(hairColor)] : []),
    ...(height ? [elem => elem.height === Math.trunc(height) || elem.height === height] : []),
    ...(wantedProfession
      ? [elem => elem.professions.some(profession => profession.includes(wantedProfession))]
      : []),
    ...(weight ? [elem => elem.weight === Math.trunc(weight) || elem.weight === weight] : [])
  ];

  return list.filter(elem => filtersToApply.every(filterFn => filterFn(elem)));
};
