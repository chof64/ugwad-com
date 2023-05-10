import { profilesCategory } from "@/config/profiles-category";
import { listLookup } from "@/lib/list-lookup";

export default function PositionTitle({ position, department }) {
  const category = listLookup(profilesCategory.positions, "position", position);
  return (
    <>
      {category.title}
      {department ? `, ${department.toUpperCase()}` : ""}
    </>
  );
}
