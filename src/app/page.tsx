import ModuleItem from "../components/ModuleItem";
import { ArrowRight } from "lucide-react";
const modules = [
  { icon: "/icons/loan.png", title: "Зээл" },
  { icon: "/icons/finances.png", title: "Санхүү" },
  { icon: "/icons/salarys.png", title: "Цалин" },
  { icon: "/icons/hrs.png", title: "Хүний нөөц" },
  { icon: "/icons/assets.png", title: "Хөрөнгө" },
  { icon: "/icons/help.png", title: "Тусламж" },

  { icon: "/icons/ebarimt.png", title: "E-Баримт" },
  { icon: "/icons/scorings.png", title: "Скоринг" },
  { icon: "/icons/messages.png", title: "Мессеж" },
  { icon: "/icons/docs.png", title: "КҮС" },
  { icon: "/icons/reports.png", title: "Бичиг баримт" },
  { icon: "/icons/settings.png", title: "Тохиргоо" },
];

export default function Home() {
  return (
    <main className="w-full">
      <section className="w-full">
        <div className="relative mx-auto h-[500px] w-full max-w-[1440px] overflow-hidden">
          <div
            className="absolute inset-0 bg-[length:200%] bg-[center_5%] bg-no-repeat lg:bg-[length:100%] lg:bg-[30%_10%]"
            style={{ backgroundImage: "url('/hero.jpg')" }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(91,42,242,0.65)_0%,rgba(123,44,242,0.65)_50%,rgba(74,42,242,0.6)_94%)]" />
          <div
            className="pointer-events-none absolute inset-0 opacity-25"
            style={{
              backgroundImage:
                "linear-gradient(45deg, rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(-45deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
              backgroundSize: "56px 56px",
            }}
          />

          <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 sm:px-6 lg:items-start lg:justify-start lg:px-[167px] lg:pt-[114px]">
            <div className="w-full max-w-[520px] text-center lg:max-w-[1106px] lg:text-left">
              <h1 className="font-['Roboto'] text-[38px] leading-[44px] font-semibold text-white capitalize lg:text-[96px] lg:leading-[96px]">
                iFinance Saas Erp
              </h1>

              <p className="mt-3 font-['Roboto'] text-[12px] leading-[24px] font-medium text-white/90 lg:text-[19px] lg:leading-[30px]">
                ББСБ-д зориулсан цогц ERP систем юм. Энэ систем нь зээлийн
                бүртгэл болон тайлагналыг хянах боломжтой бөгөөд төлөвлөлт зэрэг
                байгууллагын бүхий л үйл ажиллагааг нэг дор шийдсэн 40+ цогц
                модуль бүхий суурь систем.
              </p>
            </div>

            <div className="absolute bottom-6 left-0 w-full px-4 sm:px-6 lg:bottom-10 lg:px-[167px]">
              <div className="flex justify-center lg:justify-start">
                <button className="group /* mobile */ /* desktop */ inline-flex h-[44px] w-full max-w-[420px] items-center justify-center rounded-md bg-[linear-gradient(90deg,#AE24FE_0%,#662AED_49.3%,#0026BF_100%)] px-[16px] font-['Roboto'] text-[15px] font-medium text-white transition-all duration-300 ease-out hover:scale-[1.04] hover:shadow-[0_12px_32px_rgba(0,0,0,0.25)] active:scale-[0.98] lg:h-[42px] lg:w-[185px] lg:gap-[10px] lg:rounded-[50px] lg:px-[16px] lg:text-[16px]">
               
                  <span>Уулзалт товлох</span>

                  <ArrowRight
                    className="hidden h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 lg:inline-block"
                    strokeWidth={1.25}
                  />
                </button>
              </div>
            </div>

            {/* Scroll down */}
            <a
              href="#modules"
              aria-label="Scroll down"
              className="absolute bottom-3 left-1/2 hidden h-[65px] w-[44px] -translate-x-1/2 animate-bounce items-end justify-center rounded-[50px] border-[3px] border-white bg-transparent pb-[10px] lg:flex"
            >
              <span className="h-[22px] w-[8px] rounded-full bg-white/50" />
            </a>
          </div>
        </div>
      </section>

      <section
        id="modules"
        className="w-full scroll-mt-[70px] bg-white lg:scroll-mt-[100px]"
      >
        <div className="mx-auto min-h-[1780px] max-w-[1440px] px-4 py-[50px] sm:px-6 lg:px-[167px]">
          <div className="flex min-h-[484px] w-full max-w-[1106px] flex-col gap-[32px]">
            <div className="flex w-full max-w-[1106px] flex-col gap-[24px]">
              <h2 className="w-full text-center font-['Roboto'] text-[24px] leading-[30px] font-semibold text-[#282933] sm:text-[26px] sm:leading-[34px] lg:w-[350px] lg:text-[36px] lg:leading-[44px]">
                Үндсэн модулиуд
              </h2>

              <div className="w-full max-w-[1106px] border-t border-[#D0D5DD]" />
            </div>

            <div className="grid w-full max-w-[1106px] grid-cols-3 justify-items-center gap-y-[32px] lg:grid-cols-6">
              {modules.map((m) => (
                <ModuleItem key={m.title} {...m} />
              ))}
            </div>
          </div>

          <div className="mt-[50px] flex w-full max-w-[1106px] flex-col gap-[32px]">
          
            <div className="flex w-full max-w-[1106px] flex-col gap-[24px] px-4 sm:px-6 lg:px-0">
            
              <h2 className="text-center font-['Roboto'] text-[20px] leading-[34px] font-semibold text-[#282933] sm:text-left lg:text-[36px] lg:leading-[44px]">
                Яагаад ERP системтэй байх хэрэгтэй вэ?
              </h2>

              <p className="text-justify font-['Roboto'] text-[16px] leading-[26px] font-normal break-words text-[#667085] lg:text-[16px] lg:leading-[28px]">
                Орчин үеийн бизнесийн зах зээл хурдан хувьсан өөрчлөгдөж,
                байгууллагууд олон төрлийн үйл ажиллагаагаа, өгөгдлийг нэгэн дор
                хянах шаардлагатай болдог. ERP (Enterprise Resource Planning)
                систем нь байгууллагын санхүү, хүний нөөц, худалдан авалт,
                агуулах, борлуулалт зэрэг бүх үйл ажиллагааг нэг платформ дээр
                нэгтгэж, ил тод, автоматжуулсан байдлаар удирдах боломжийг
                олгодог.
              </p>

              <div className="w-full border-t border-[#D0D5DD]" />
            </div>

            {/* ===== Cards ===== */}
            <div className="flex w-full flex-col gap-[24px]">
              <div className="flex w-full flex-col gap-[24px] lg:flex-row">
                {/* Card 1 */}
                <div className="w-full rounded-[30px] border border-[#E4E7EC] bg-white p-[24px] lg:w-1/2">
                  <div className="flex w-full max-w-[493px] flex-col gap-[14px]">
                    <div className="flex h-[60px] w-[60px] items-center justify-center rounded-[40px] border-[5px] border-[#F1F3F5] bg-[#0026BF]">
                      <span className="font-['Roboto'] text-[18px] font-semibold text-white">
                        01
                      </span>
                    </div>

                    <div className="flex w-full flex-col gap-[10px]">
                      <h3 className="font-['Roboto'] text-[20px] font-semibold text-[#282933]">
                        Үр ашгийг нэмэгдүүлэх
                      </h3>
                      <p className="text-justify font-['Roboto'] text-[16px] leading-[26px] font-normal break-words text-[#667085] lg:text-[16px] lg:leading-[28px]">
                        ERP систем нь үйл ажиллагааны процессийг автоматжуулж,
                        гар ажиллагааны алдаа, давхардах ажлыг багасгадаг.
                        Монголын жижиг, дунд бизнесүүдэд цаг хугацаа, хүний нөөц
                        хэмнэх нь маш чухал. Жишээлбэл: санхүүгийн тайланг
                        гараар бэлдэх шаардлагагүй болж, удирдлага шууд бодит
                        өгөгдөл дээр үндэслэн шийдвэр гаргах боломжтой болно.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="w-full rounded-[30px] border border-[#E4E7EC] bg-white p-[24px] lg:w-1/2">
                  <div className="flex w-full max-w-[493px] flex-col gap-[14px]">
                    <div className="flex h-[60px] w-[60px] items-center justify-center rounded-[40px] border-[5px] border-[#F1F3F5] bg-[#0026BF]">
                      <span className="font-['Roboto'] text-[18px] font-semibold text-white">
                        02
                      </span>
                    </div>

                    <div className="flex w-full flex-col gap-[10px]">
                      <h3 className="font-['Roboto'] text-[20px] font-semibold text-[#282933]">
                        Үйл ажиллагааны ил тод байдал
                      </h3>
                      <p className="text-justify font-['Roboto'] text-[16px] leading-[26px] font-normal break-words text-[#667085] lg:text-[16px] lg:leading-[28px]">
                        ERP нь байгууллагын бүх салбарын өгөгдлийг нэгтгэснээр
                        шалгалт, тайлан, аудит илүү хялбар болдог. Монголд олон
                        компаниас санхүүгийн ил тод байдал, дотоод хяналт
                        шаарддаг тул ERP систем нь энэ талын сорилтыг даван
                        туулахад тусална.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex w-full flex-col gap-[24px] lg:flex-row">
                {/* Card 3 */}
                <div className="w-full rounded-[30px] border border-[#E4E7EC] bg-white p-[24px] lg:w-1/2">
                  <div className="flex w-full max-w-[493px] flex-col gap-[14px]">
                    <div className="flex h-[60px] w-[60px] items-center justify-center rounded-[40px] border-[5px] border-[#F1F3F5] bg-[#0026BF]">
                      <span className="font-['Roboto'] text-[18px] font-semibold text-white">
                        03
                      </span>
                    </div>

                    <div className="flex w-full flex-col gap-[10px]">
                      <h3 className="font-['Roboto'] text-[20px] font-semibold text-[#282933]">
                        Борлуулалт ба харилцаа
                      </h3>
                      <p className="text-justify font-['Roboto'] text-[16px] leading-[26px] font-normal break-words text-[#667085] lg:text-[16px] lg:leading-[28px]">
                        ERP системтэй байгууллага нь борлуулалтын өгөгдлийг
                        бодит цаг хугацаанд харах, хэрэглэгчийн худалдан авалтын
                        түүх, шаардлагыг удирдах боломжтой. Ингэснээр
                        борлуулалтын баг хурдан шийдвэр гаргаж, үйлчлүүлэгчдэд
                        илүү сайн үйлчилгээ үзүүлдэг.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 4 */}
                <div className="w-full rounded-[30px] border border-[#E4E7EC] bg-white p-[24px] lg:w-1/2">
                  <div className="flex w-full max-w-[493px] flex-col gap-[14px]">
                    <div className="flex h-[60px] w-[60px] items-center justify-center rounded-[40px] border-[5px] border-[#F1F3F5] bg-[#0026BF]">
                      <span className="font-['Roboto'] text-[18px] font-semibold text-white">
                        04
                      </span>
                    </div>

                    <div className="flex w-full flex-col gap-[10px]">
                      <h3 className="font-['Roboto'] text-[20px] font-semibold text-[#282933]">
                        Өсөлтөд дасан зохицох
                      </h3>
                      <p className="text-justify font-['Roboto'] text-[16px] leading-[26px] font-normal break-words text-[#667085] lg:text-[16px] lg:leading-[28px]">
                        Монголын зах зээлд компаниуд хурдан өсч, олон салбар,
                        салбар нэгжтэй болж байна. ERP систем нь байгууллагын
                        процессийг стандартаар нэгтгэж, шинэ салбар нэгж
                        нэвтрүүлэхэд хялбар болгодог тул өсөлтөд бэлэн болгодог.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 5 */}
              <div className="w-full rounded-[30px] border border-[#E4E7EC] bg-white p-[24px]">
                <div className="flex w-full flex-col gap-[14px]">
                  <div className="flex h-[60px] w-[60px] items-center justify-center rounded-[40px] border-[5px] border-[#F1F3F5] bg-[#0026BF]">
                    <span className="font-['Roboto'] text-[18px] font-semibold text-white">
                      05
                    </span>
                  </div>

                  <div className="flex w-full flex-col gap-[10px]">
                    <h3 className="font-['Roboto'] text-[20px] font-semibold text-[#282933]">
                      Үйл ажиллагааны ил тод байдал
                    </h3>

                    <p className="text-justify font-['Roboto'] text-[16px] leading-[26px] font-normal break-words text-[#667085] lg:text-[16px] lg:leading-[28px]">
                      ERP систем нь томоохон өгөгдлийг төвлөрүүлж, тайлан
                      гаргах, шинжилгээ хийх боломжийг олгодог. Монголын
                      бизнесүүд стратеги боловсруулахдаа зөв мэдээлэл дээр
                      суурилсан шийдвэр гаргах шаардлагатай байдаг тул ERP
                      систем энэ талд чухал үүрэг гүйцэтгэнэ.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
