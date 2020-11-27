export default (list, { name, age, wantedFriend, hairColor, height, wantedProfession, weight }) => {
  const filtersToApply = [
    ...(name ? [elem => elem.name.includes(name)] : []),
    ...(age ? [elem => elem.age === age] : []),
    ...(wantedFriend ? [elem => elem.friends.some(friend => friend.includes(wantedFriend))] : []),
    ...(hairColor ? [elem => elem.hair_color.includes(hairColor)] : []),
    ...(wantedProfession
      ? [elem => elem.professions.some(profession => profession.includes(wantedProfession))]
      : []),
    ...(height ? [elem => elem.height - 1 <= height && height <= elem.height + 1] : []),
    ...(weight ? [elem => elem.weight - 1 <= weight && weight <= elem.weight + 1] : [])
  ];

  return list.filter(elem => filtersToApply.every(filterFn => filterFn(elem)));
};
