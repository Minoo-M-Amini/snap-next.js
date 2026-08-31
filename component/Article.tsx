import Image from "next/image";
import Link from "next/link";

function Article() {
  return (
    <section className="px-4 pt-10 md:pt-20" dir="rtl">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-12">
        <div className="lg:col-span-6 lg:col-start-2">
          <p className="mb-5 text-3xl font-bold leading-tight md:text-5xl">
            تجربه‌ی زندگی راحت‌تر، سریع‌تر و به‌صرفه‌تر با سوپراپلیکیشن اسنپ!
          </p>
          <p className="text-base text-gray-700 md:text-xl">
            از درخواست خودرو تا سفارش غذا، خرید سوپرمارکتی، رزرو بلیت سفر و...
            را با اسنپ انجام دهید.
          </p>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row">
            <div className="rounded-xl bg-green-600 px-5 py-4 text-center transition hover:bg-green-500 sm:min-w-52">
              <Link
                href="#"
                className="flex items-center justify-center gap-2 text-amber-50"
              >
                <Image
                  src="/icons8-internet-30.png"
                  alt="web"
                  width={20}
                  height={20}
                  className="h-5 w-5"
                  unoptimized
                />
                ورود به وب اپلیکیشن
              </Link>
            </div>

            <div className="rounded-xl border-2 border-green-600 px-5 py-4 text-center transition hover:bg-green-50 sm:min-w-40">
              <Link href="#" className="flex items-center justify-center gap-2">
                <Image
                  src="/icons8-arrow-down-30 (1).png"
                  alt="download"
                  width={24}
                  height={24}
                  className="h-6 w-6"
                  unoptimized
                />
                download
              </Link>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 lg:col-start-8">
          <Image
            src="/rightArticle.png"
            alt="leftArticle-photo"
            width={700}
            height={560}
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="mx-auto w-full max-w-lg rounded-3xl shadow-lg"
            unoptimized
          />
        </div>
      </div>
    </section>
  );
}

export default Article;
