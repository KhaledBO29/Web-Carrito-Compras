import Image from "next/image";
import {
  Pencil,
  ShieldCheck,
  Headphones,
  Lock,
  Plus,
} from "lucide-react";

export default function Page() {
  const products = [
    {
      name: "Silicone Case for iPhone 7",
      desc: "Product color: Midnight Blue, Turquoise Blue",
      qty: "Quantity: 2 items",
      price: "€36.40",
      unit: "€18.20 per item",
      img: "https://images.unsplash.com/photo-1601593346740-925612772716?w=200",
    },
    {
      name: "Tempered glass for iPhone",
      desc: "Size: iPhone 7, iPhone 8",
      qty: "Quantity: 4 items",
      price: "€20.00",
      unit: "€5.00 per item",
      img: "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=200",
    },
    {
      name: "Tempered glass for iPhone",
      desc: "Size: iPhone 7, iPhone 8",
      qty: "Quantity: 4 items",
      price: "€20.00",
      unit: "€5.00 per item",
      img: "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=200",
    },
  ];

  return (
    <main className="min-h-screen bg-[#f3f5f9]">
      {/* ================= HEADER ================= */}
      <header className="bg-[#162a7a] text-white">
        <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
          <span className="text-sm opacity-80 cursor-pointer">
            ← Go Back
          </span>

          <h1 className="text-3xl font-extrabold tracking-widest">
            2019
          </h1>

          <div className="space-y-1">
            <div className="w-6 h-[2px] bg-white" />
            <div className="w-6 h-[2px] bg-white" />
            <div className="w-6 h-[2px] bg-white" />
          </div>
        </div>

        {/* STEPS */}
        <div className="bg-[#1e3799]">
          <div className="max-w-7xl mx-auto px-6 py-5 flex gap-10 text-sm font-medium">
            {[
              "Personal details",
              "Order details",
              "Payment",
              "Confirmation",
            ].map((step, i) => (
              <div key={i} className="flex items-center gap-3">
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold
                  ${
                    i === 0
                      ? "bg-orange-400 text-black"
                      : "bg-[#2743b8]"
                  }`}
                >
                  {i + 1}
                </div>
                {step}
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* ================= CONTENT ================= */}
      <section className="max-w-7xl mx-auto px-6 py-12 grid lg:grid-cols-3 gap-8">
        {/* ORDER ITEMS */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-8">
          <div className="flex justify-between mb-8">
            <h2 className="text-lg font-bold">
              Order items
            </h2>

            <button className="flex items-center gap-2 text-blue-700 text-sm font-medium">
              <Pencil size={16} />
              Edit shopping cart
            </button>
          </div>

          {products.map((p, i) => (
            <div
              key={i}
              className="flex justify-between items-center border-b last:border-none py-6"
            >
              <div className="flex gap-5">
                <Image
                  src={p.img}
                  alt="product"
                  width={70}
                  height={70}
                  className="rounded-lg object-cover"
                />

                <div>
                  <p className="font-semibold text-gray-900">
                    {p.name}
                  </p>

                  <p className="text-sm text-gray-500">
                    {p.desc}
                  </p>

                  <p className="text-sm text-gray-400">
                    {p.qty}
                  </p>
                </div>
              </div>

              <div className="text-right">
                <p className="font-bold text-lg">
                  {p.price}
                </p>
                <p className="text-sm text-gray-400">
                  {p.unit}
                </p>
              </div>
            </div>
          ))}

          <p className="text-center text-sm text-blue-700 mt-6 font-medium cursor-pointer">
            Have discount code? Click to enter it.
          </p>
        </div>

        {/* ================= SUMMARY ================= */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm p-7">
            <h3 className="font-bold text-lg mb-5">
              Summary
            </h3>

            <div className="space-y-3 text-sm">
              <Row label="Subtotal" value="€56.40" />
              <Row label="Delivery" value="FREE" green />
              <Row label="Tax" value="€11.84" />
              <Row label="Insurance" value="€7.00" />

              <div className="border-t pt-4 flex justify-between font-extrabold text-lg">
                <span>TOTAL:</span>
                <span>€75.24</span>
              </div>
            </div>
          </div>

          {/* DELIVERY */}
          <div className="bg-white rounded-xl shadow-sm p-6 flex justify-between items-center">
            <span className="font-semibold">
              Delivery
            </span>

            <button className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center">
              <Plus size={18} />
            </button>
          </div>

          <button className="w-full bg-[#162a7a] text-white py-4 rounded-lg font-semibold hover:opacity-90 transition">
            Next step
          </button>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-white border-t py-14">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 text-center px-6">
          <Feature
            icon={<Lock />}
            title="Your information is Safe"
          />
          <Feature
            icon={<ShieldCheck />}
            title="Secure checkout"
          />
          <Feature
            icon={<Headphones />}
            title="24/7 Support"
          />
        </div>
      </footer>
    </main>
  );
}

/* ================= COMPONENTS ================= */

function Row({
  label,
  value,
  green,
}: any) {
  return (
    <div className="flex justify-between">
      <span className="text-gray-600">{label}</span>
      <span
        className={`font-semibold ${
          green ? "text-green-600" : ""
        }`}
      >
        {value}
      </span>
    </div>
  );
}

function Feature({ icon, title }: any) {
  return (
    <div>
      <div className="w-12 h-12 mx-auto mb-4 bg-orange-100 text-orange-500 flex items-center justify-center rounded-full">
        {icon}
      </div>

      <h4 className="font-bold">{title}</h4>

      <p className="text-sm text-gray-500 mt-2">
        The total cost consist of the tax,
        insurance and the delivery charge.
      </p>
    </div>
  );
}