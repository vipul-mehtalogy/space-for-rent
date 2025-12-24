import {
  Bus,
  ShoppingCart,
  Leaf,
  Hospital,
  ShieldCheck,
  Landmark,
  MapPin,
  Map,
  Banknote,
  Pill,
  Trees,
  Scissors
} from "lucide-react";

const iconMap: any = {
  bus: Bus,
  "shopping-cart": ShoppingCart,
  leaf: Leaf,
  pharmacy: Pill,
  hospital: Hospital,
  bank: Banknote,
  shield: ShieldCheck,
  park: Trees,
  scissors: Scissors,
  temple: Landmark,
  "map-pin": MapPin,
  map: Map
};

export default function NearbyPlaces({ places }: { places: any[] }) {
  return (
    <section className="m-4">
      <h2 className="text-xl font-semibold mb-4">
        Nearby & Accessibility
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {places.map((place, i) => {
          const Icon = iconMap[place.icon];
          return (
            <div
              key={i}
              className="flex items-center gap-3 border rounded-lg p-3 bg-gray-50"
            >
              <Icon className="w-5 h-5 text-blue-600" />
              <div>
                <p className="text-sm font-medium">{place.label}</p>
                <p className="text-xs text-gray-600">{place.distance}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
