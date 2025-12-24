type Place = {
  label: string;
  distance: string;
};

export function buildNearbySeoText(
  places: Place[],
  prefix = "Furnished rooms for rent located near"
) {
  const formatted = places.map((p) => {
    const distance = p.distance.replace("m", " meters").replace("km", " kilometer");
    return `${p.label} (${distance})`;
  });

  if (formatted.length === 0) return "";

  if (formatted.length === 1) {
    return `${prefix} ${formatted[0]}.`;
  }

  return (
    `${prefix} ` +
    formatted.slice(0, -1).join(", ") +
    ", and " +
    formatted[formatted.length - 1] +
    "."
  );
}
