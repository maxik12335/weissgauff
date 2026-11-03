   // Получаем root css стили
    const rootStyles = getComputedStyle(document.documentElement);
    const lightBg = rootStyles.getPropertyValue('--color-background').trim();  // #FFFFFF
    const lightText = rootStyles.getPropertyValue('--color-text').trim(); // #1A1A1A
    const darkBg = rootStyles.getPropertyValue('--color-background-dark').trim();    // #1A1A1A
    const darkText = rootStyles.getPropertyValue('--color-text-dark').trim(); // #FFFFFF
  
    // Изначальное состояние: белый фон, темный текст
    const [navColor, setNavColor] = useState(lightBg); 
    const [textColor, setTextColor] = useState(lightText);
  
    useEffect(() => {
  
      let ticking = false;
  
      const handleScroll = () => {
        if (!ticking) {
          requestAnimationFrame(() => {
            // 1. Собираем все ID темных блоков в массив
            const darkIds = ['dark_1']; 
            
            // 2. Сразу ищем их в DOM
            const darkBlocks = darkIds.map(id => document.getElementById(id));
  
            // 3. Флаг по умолчанию
            let isCurrentlyOnDark = false;
  
            // 4. Проходим циклом по всем найденным блокам
            darkBlocks.forEach(block => {
              // Проверяем: существует ли блок И коснулся ли он навбара
              // if (block && block.getBoundingClientRect().top < 60 ) {
              //   isCurrentlyOnDark = true;
              // }
  
              if (block) { 
                const rect = block.getBoundingClientRect();
  
                if (rect.top < 100 && rect.bottom > 60) {
                  if (block.id === 'dark_1') { isCurrentlyOnDark = true; }
                }
              }
            });
  
            // 5. Ставим стили (здесь логика остается прежней)
            if (isCurrentlyOnDark) {
              setNavColor(darkBg);
              setTextColor(darkText);
            } else {
              setNavColor(lightBg);
              setTextColor(lightText);
            }
  
            ticking = false;
          });
          ticking = true;
        }
      };
  
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);