export default function Footer() {
  return (
    <footer className="w-full bg-[#282933] text-white">
      <div className="relative mx-auto min-h-[554px] w-full max-w-[1440px] overflow-hidden px-4 sm:px-6 lg:px-[167px]">
        <div className="pointer-events-none absolute top-0 left-0 h-[481px] w-full opacity-[0.04]" />

        <div className="relative pt-[94px]">
          <div className="flex h-auto w-full max-w-[416px] flex-col gap-[32px] lg:h-[305px]">
            {/* Logo */}
            <img
              src="/footer-logo.png"
              alt="iFinance"
              className="h-auto w-[160px] object-contain lg:h-[52px] lg:w-[194.85px]"
            />

            <p className="h-auto w-full text-justify text-[16px] leading-[24px] text-white/85 lg:h-[144px]">
              Санхүүгийн салбарын 70 гаруй компанид санхүү бүртгэл, онлайн зээл,
              онлайн даатгал, онлайн үнэт цаас арилжаа гэх мэт ФИНТЕК
              системүүдийн өдөр тутмын найдвартай, тасралтгүй байдлыг хангаж
              ажилладаг IT компани юм.
            </p>

            <div className="flex h-[45px] w-[117px] items-center gap-[34px]">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-[44px] w-[44px] items-center justify-center rounded-full hover:bg-white/10 focus:ring-2 focus:ring-white/40 focus:outline-none"
              >
                <img
                  src="/icons/facebook.png"
                  alt="Facebook"
                  className="h-[38px] w-[38px]"
                />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-[48px] w-[48px] items-center justify-center rounded-full hover:bg-white/10 focus:ring-2 focus:ring-white/40 focus:outline-none"
              >
                <img
                  src="/icons/instagram.png"
                  alt="Instagram"
                  className="h-[45px] w-[45px]"
                />
              </a>
            </div>
          </div>

          <div className="mt-15 grid grid-cols-2 gap-x-6 gap-y-12 lg:absolute lg:top-[94px] lg:left-[556px] lg:flex lg:h-[204px] lg:w-[550px] lg:gap-[50px]">
            {/* Column 1 */}
            <div>
              <h4 className="text-[18px] font-medium text-white lg:text-[20px]">
                Манай компани
              </h4>
              <ul className="mt-4 space-y-3">
                <li>
                  <a href="#" className="text-white/80 hover:text-white">
                    Бидний тухай
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/80 hover:text-white">
                    Портфолио
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h4 className="text-[18px] font-medium text-white lg:text-[20px]">
                Бүтээгдэхүүн
              </h4>
              <ul className="mt-4 space-y-3">
                <li>
                  <a href="#" className="text-white/80 hover:text-white">
                    ББСБ
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/80 hover:text-white">
                    ҮЦК
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/80 hover:text-white">
                    Даатгал
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/80 hover:text-white">
                    МЗҮАЭ
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3 */}
            <div className="col-span-2 lg:col-span-1">
              <h4 className="text-[18px] font-medium text-white lg:text-[20px]">
                Ажлын байр
              </h4>
              <ul className="mt-4 space-y-3">
                <li>
                  <a href="#" className="text-white/80 hover:text-white">
                    Ажлын байрны зар
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/80 hover:text-white">
                    Хүсэлт илгээх
                  </a>
                </li>
              </ul>
            </div>

            <img
              src="/iso.png"
              alt="ISO 27001"
              className="absolute top-auto right-22 bottom-40 z-10 h-[90px] w-auto translate-x-1/2 object-contain lg:top-[180px] lg:right-0 lg:bottom-auto lg:h-[134px] lg:w-[145px] lg:translate-x-0"
            />
          </div>
          <div className="mx-auto mt-12 w-full border-t border-white/40 lg:absolute lg:top-[481px] lg:left-0 lg:mt-0 lg:w-[1106px] lg:border-white lg:opacity-20" />
          <div className="mt-6 flex flex-col items-center gap-3 pb-10 text-center text-sm text-white/80 lg:absolute lg:top-[500px] lg:left-0 lg:mt-0 lg:w-[1106px] lg:flex-row lg:justify-between lg:pb-0 lg:text-left lg:text-[18px] lg:leading-[32px] lg:text-white">
            <span className="lg:w-[360px]">
              © Copyright 2025 Intelligent Finance LLC.
            </span>

            <a href="#" className="hover:text-white lg:w-[336px] lg:text-right">
              Мэдээллийн аюулгүй байдлын бодлого
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
