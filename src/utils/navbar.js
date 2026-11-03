import { useEffect, useState } from "react";

// useNavColor() - Navbar в цвет фона
    // переменные:
        // :root {lightBg | lightText | darkBg | darkText}
          // *** нужны переменные именно в :root
        // class: .section--dark
          // *** добавить класс на родительский блок, где нужна темная тема

    // в Navbar.jsx вставить
        // 1. style={{color: textColor}} в текст
        // 2. style={{ backgroundColor: navColor }} в фон

export const useNavColor = () => {
  // Сначала пустые значения, заполним их в useEffect
  const [navColor, setNavColor] = useState("");
  const [textColor, setTextColor] = useState("");

  useEffect(() => {
    const root = document.documentElement;
    const g = (name) => getComputedStyle(root).getPropertyValue(name).trim();

    // Читаем переменные один раз при монтировании
    const lightBg = g("--color-background");
    const lightText = g("--color-text");
    const darkBg = g("--color-background-dark");
    const darkText = g("--color-text-dark");

    // Сразу ставим светлый режим как дефолт (чтобы не было прозрачного навбара)
    setNavColor(lightBg);
    setTextColor(lightText);

    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        const darkBlocks = document.querySelectorAll(".section--dark");
        let isCurrentlyOnDark = false;

        darkBlocks.forEach((block) => {
          const rect = block.getBoundingClientRect();

          // Логика: верх блока ниже низа навбара И низ блока выше начала экрана
          if (rect.top <= 60 && rect.bottom >= 60) {
            isCurrentlyOnDark = true;
          }
        });

        if (isCurrentlyOnDark) {
          setNavColor(darkBg);
          setTextColor(darkText);
        } else {
          setNavColor(lightBg);
          setTextColor(lightText);
        }

        ticking = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { navColor, textColor };
};
