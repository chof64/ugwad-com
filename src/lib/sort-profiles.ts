import { profilesOrder } from "@/config/profiles-order";

export const sortProfiles = (profiles) => {
  const sorted = [];

  profilesOrder.upper.forEach((position) => {
    const items = profiles.filter((profile) => {
      return profile.position === position;
    });

    items.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });

    // @ts-ignore
    sorted.push(...items);
  });

  profilesOrder.middle.forEach((position) => {
    const rep = profiles.filter((profile) => {
      return profile.position === position;
    });

    profilesOrder.departments.forEach((department) => {
      const dept = rep.filter((profile) => {
        return profile.department === department;
      });

      dept.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });

      // @ts-ignore
      sorted.push(...dept);
    });
  });

  profilesOrder.departments.forEach((department) => {
    const dept = profiles.filter((profile) => {
      return profile.department === department;
    });
    profilesOrder.lower.forEach((position) => {
      const items = dept.filter((profile) => {
        return profile.position === position;
      });

      items.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });

      // @ts-ignore
      sorted.push(...items);
    });
  });

  return sorted;
};
