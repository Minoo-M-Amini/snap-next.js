import Image from "next/image";
import Link from "next/link";

const blogItems = [
  {
    image:
      "https://snapp.ir/blog/wp-content/uploads/2025/02/Blog-header-1600x400-1.jpg",
    title: "سرویس «سفر اشتراکی» اسنپ،‌ به‌صرفه‌تر و پایدارتر",
    description:
      "سرویس سفر اشتراکی راهکاری مناسب برای کاهش هزینه‌ها، به‌ویژه در ساعات اوج ترافیک است.",
  },
  {
    image: "https://snapp.ir/blog/wp-content/uploads/2024/06/Layer-17.jpg",
    title: "افزایش امنیت کاربران راننده اسنپ با سرویس «امنیت سفر»",
    description:
      "اسنپ با معرفی سرویس «امنیت سفر» به کاربران مسافر این امکان را داده تا در صورت بروز هرگونه مشکل یا احساس ناامنی، به طور مستقیم با تیم امنیت سفر تماس بگیرند.",
  },
  {
    image:
      "https://snapp.ir/blog/wp-content/uploads/2026/01/PR_Cab_Blog-Cover_1007-scaled.jpg",
    title: "۱۶ باور اشتباه درباره سفرهای اسنپی",
    description:
      "شاید هنگام استفاده از اسنپ سوال‌هایی برای‌تان پیش آمده باشد که پاسخش را نمی‌دانید.",
  },
];

function WebLog() {
  return (
    <section className="container m-auto mb-20 px-4" dir="rtl">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-2xl md:text-3xl">تازه‌ترین‌های وبلاگ اسنپ</p>
        <button className="rounded p-2.5 transition hover:bg-green-100">
          <Link
            href="#"
            className="flex items-center gap-2 text-lg text-green-600"
          >
            مطالب بیشتر در وبلاگ اسنپ
            <Image
              src="/icons8-left-arrow-30.png"
              alt="left"
              width={12}
              height={12}
              className="h-3 w-3"
              unoptimized
            />
          </Link>
        </button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {blogItems.map((item) => (
          <Link
            key={item.title}
            href="#"
            className="rounded-2xl p-2 transition hover:bg-gray-50"
          >
            <Image
              src={item.image}
              alt={item.title}
              width={800}
              height={520}
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              className="mb-4 h-52 w-full rounded-xl object-cover"
              unoptimized
            />
            <p className="mb-3 text-xl md:text-2xl">{item.title}</p>
            <p className="text-base text-gray-700 md:text-lg">
              {item.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default WebLog;
