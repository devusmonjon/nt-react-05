const Hero = () => {
  return (
    <section className="pt-[131px]">
      <div className="container flex justify-between flex-col-reverse xl:flex-row gap-10 xl:gap-0">
        <div className="p-[46px_60px_0_60px]">
          <h1 className="text-[48px] font-bold mb-[31px] w-full xl:w-[351px]">
            Мебель на любой вкус!
          </h1>
          <ul className="flex flex-col gap-1 mb-[38px]">
            <li className="before:content-['•'] before:text-[#FF9900BF] relative before:absolute before:left-[-20px] text-[18px] font-normal text-black">
              Худи, чашки для горячего чая и термосы{" "}
            </li>
            <li className="before:content-['•'] before:text-[#FF9900BF] relative before:absolute before:left-[-20px] text-[18px] font-normal text-black">
              Eлочные игрушки, брелочки{" "}
            </li>
            <li className="before:content-['•'] before:text-[#FF9900BF] relative before:absolute before:left-[-20px] text-[18px] font-normal text-black">
              Начало списка вещей, которые можно
            </li>
          </ul>
          <button className="text-[18px] flex items-center justify-center h-[53px] w-full rounded-[75px] bg-[#FF9900] text-white border-[#FF9900] border-2 duration-300 hover:bg-white hover:text-[#FF9900] outline-none active:bg-[#FF9900] focus:ring-2 ring-[#FF9900] ring-offset-2">
            Перейти в каталог
          </button>
        </div>
        <img src="/hero.png" alt="Hero" />
      </div>
    </section>
  );
};

export default Hero;
