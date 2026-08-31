import Image from "next/image";
import Link from "next/link";

const benefits = [
  "درآمد تضمینی + پاداش‌های ماهانه و هفتگی",
  "درآمد تضمینی + پاداش‌های ماهانه و هفتگی",
  "درآمد تضمینی + پاداش‌های ماهانه و هفتگی",
  "درآمد تضمینی + پاداش‌های ماهانه و هفتگی",
  "درآمد تضمینی + پاداش‌های ماهانه و هفتگی",
  "درآمد تضمینی + پاداش‌های ماهانه و هفتگی",
];

function Sabtenam() {
  return (
    <section className="px-4 py-10" dir="rtl">
      <div className="mx-auto max-w-6xl">
        <Image
          src="/snap1.jpg"
          alt="snap1"
          width={1200}
          height={500}
          sizes="(max-width: 768px) 100vw, 70vw"
          className="mx-auto mb-6 w-full max-w-4xl rounded-3xl"
          unoptimized
        />

        <p className="mx-auto mb-3 max-w-3xl text-center text-2xl font-bold md:text-4xl">
          در کمتر از ۱۰ دقیقه ثبت‌نام کنید و به ناوگان اسنپ بپیوندید.
        </p>
        <p className="mx-auto mb-8 max-w-3xl text-center text-base text-gray-700 md:text-xl">
          بدون نیاز به مراجعه‌ی حضوری، از طریق این صفحه، تمام مراحل ثبت‌نام را
          اینترنتی انجام دهید.
        </p>

        <div className="mb-10 flex justify-center">
          <Link
            href="#"
            className="rounded-xl bg-green-600 px-6 py-3 text-xl text-amber-50 transition hover:bg-green-500"
          >
            ثبت نام رانندگان
          </Link>
        </div>

        <div className="mx-auto mb-12 w-full max-w-3xl overflow-hidden rounded-3xl shadow-lg">
          <video
            src="https://web-cdn.snapp.ir/snappir-marketing/images/homepage/jazbranandeh1.mp4"
            className="block h-auto w-full"
            controls
            preload="none"
          ></video>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {benefits.map((title, index) => (
            <div
              key={title + index}
              className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
            >
              <Image
                className="mx-auto mb-4"
                src="https://web-cdn.snapp.ir/snapp-website/images/homepage/180x100-income.png"
                alt="benefit"
                width={180}
                height={100}
                unoptimized
              />
              <p className="text-center text-xl md:text-2xl">{title}</p>
              <p className="mt-3 text-base text-gray-700 md:text-lg">
                با فعالیت در ناوگان اسنپ، علاوه بر کسب درآمد مستمر و امکان تسویه
                در لحظه می‌توانید با شرکت در طرح‌های تشویقی مختلف، درآمد خود را
                افزایش دهید.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Sabtenam;
