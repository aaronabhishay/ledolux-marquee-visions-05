import { Card } from "@/components/ui/card";

const products = [
  {
    id: 1,
    name: "MARQUEE PREMIUM",
    category: "Event Lighting",
    price: "$2,499",
    image: "https://images.unsplash.com/photo-1519167758481-83f29da18262?q=80&w=1000&auto=format&fit=crop",
    description: "Professional marquee lighting system for premium events"
  },
  {
    id: 2,
    name: "CINEMATIC ARRAY",
    category: "Stage Lighting",
    price: "$3,899",
    image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=1000&auto=format&fit=crop",
    description: "Cinema-grade lighting array for theatrical productions"
  },
  {
    id: 3,
    name: "GOLDEN HOUR",
    category: "Ambient Lighting",
    price: "$1,799",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?q=80&w=1000&auto=format&fit=crop",
    description: "Warm ambient lighting solution for intimate gatherings"
  },
  {
    id: 4,
    name: "SPOTLIGHT ELITE",
    category: "Performance Lighting",
    price: "$4,299",
    image: "https://images.unsplash.com/photo-1429514513361-8fa32282fd5?q=80&w=1000&auto=format&fit=crop",
    description: "High-intensity spotlight system for performances"
  }
];

export const ProductSection = () => {
  return (
    <section className="py-20 px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-futura text-4xl md:text-5xl text-foreground tracking-tight mb-4">
            SIGNATURE COLLECTION
          </h2>
          <p className="font-manrope text-muted-foreground max-w-2xl mx-auto">
            Each piece crafted to transform spaces and create unforgettable moments. 
            Premium lighting solutions for events that matter.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="group overflow-hidden border-border hover:shadow-premium transition-all duration-500">
              {/* Product Image */}
              <div className="relative overflow-hidden aspect-[4/5]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Mobile Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-white/90 dark:bg-black/90 backdrop-blur-sm md:hidden">
                  <h3 className="font-manrope font-semibold text-sm uppercase tracking-wider text-foreground">
                    {product.name}
                  </h3>
                  <p className="font-manrope text-xs text-muted-foreground mb-2">
                    {product.category}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-manrope font-bold text-gold">{product.price}</span>
                    <button className="bg-foreground text-background px-4 py-1 rounded text-xs font-medium uppercase tracking-wider">
                      View Details
                    </button>
                  </div>
                </div>
              </div>

              {/* Desktop Product Details */}
              <div className="p-6 hidden md:block">
                <div className="mb-3">
                  <h3 className="font-manrope font-semibold text-lg uppercase tracking-wider text-foreground mb-1">
                    {product.name}
                  </h3>
                  <p className="font-manrope text-sm text-muted-foreground">
                    {product.category}
                  </p>
                </div>
                
                <p className="font-manrope text-sm text-muted-foreground mb-4 line-clamp-2">
                  {product.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="font-manrope font-bold text-xl text-gold">
                    {product.price}
                  </span>
                  <button className="bg-foreground text-background px-4 py-2 rounded-lg text-sm font-medium uppercase tracking-wider hover:bg-gold hover:text-gold-foreground transition-colors">
                    Inquire
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};