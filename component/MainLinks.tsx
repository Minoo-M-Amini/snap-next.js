import Image from "next/image";
import Link from "next/link";

const serviceItems = Array.from({ length: 9 }, (_, index) => ({
  title: "تاکسی اینترنتی",
  subtitle: "درخواست آنلاین خودرو",
  image: "sedan (2).png",
  key: `service-${index}`,
}));

function MainLinks() {
  return (
    <section className="mt-20 px-4" dir="rtl">
      <p className="mb-8 text-center text-2xl md:text-3xl">
        یک اپلیکیشن، برای تمام نیازها
      </p>

      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex items-center gap-2 text-lg">
          <Image src="/icons8-stars-64.png" alt="stars" width={32} height={32} className="h-8 w-8" unoptimized />
          <span>پیشنهادی</span>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {serviceItems.map((item) => (
            <div
              key={item.key}
              className="flex items-center justify-between gap-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md"
            >
              <Link href="#" className="flex-1 text-xl md:text-2xl">
                {item.title}
                <p className="mt-2 text-base text-gray-600 md:text-lg">
                  {item.subtitle}
                </p>
              </Link>
              <Image
                src={`/${item.image}`}
                alt={item.title}
                width={64}
                height={64}
                className="h-16 w-16 object-contain"
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MainLinks;
