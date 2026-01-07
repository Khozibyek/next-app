export default function ModuleItem({ icon, title }) {
  return (
    <div
      className="
        flex flex-col items-center
        gap-[16px]
        h-[120px] w-[96px]

        sm:h-[132px] sm:w-[102px] sm:gap-[20px]

        lg:h-[148px] lg:w-[110px] lg:gap-[30px]
      "
    >
      {/* Module image */}
      <img
        src={icon}
        alt={title}
        className="
          h-[48px] w-[48px]
          sm:h-[56px] sm:w-[56px]
          lg:h-[70px] lg:w-[70px]
          object-contain
        "
      />

      {/* Module title */}
      <p
        className="
          text-center font-['Roboto'] font-semibold tracking-[0.15px] text-[#282933]

          text-[14px] leading-[18px]
          sm:text-[16px] sm:leading-[20px]
          lg:text-[18px] lg:leading-[24px]

          w-full
        "
      >
        {title}
      </p>
    </div>
  );
}
