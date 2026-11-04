const fs = require('fs');
const path = require('path');

const pages = [
  { href: '/', title: 'главная' },
  { href: '/brand', title: 'бренд' },
  { href: '/catalog', title: 'каталог' },
  { href: '/delivery', title: 'доставка' },
  { href: '/payment', title: 'оплата' },
  { href: '/info', title: 'важная информация' },
  { href: '/warranty-terms', title: 'условия гарантии' },
  { href: '/service-request', title: 'заявка на сервисное обслуживание' },
  { href: '/parts-request', title: 'заявка на заказ запасных частей' },
  { href: '/tech-consult', title: 'заявка на техническую консультацию' },
  { href: '/wholesale-form', title: 'форма для обращения оптовых покупателей' },
  { href: '/installation', title: 'установка техники' },
  { href: '/return-request', title: 'заявка на возврат товара' },
  { href: '/faq', title: 'часто задаваемые вопросы' },
  { href: '/extended-warranty', title: 'дополнительный год гарантии на технику Weissgauff' },
  { href: '/contacts', title: 'контакты' },
  { href: '/showrooms', title: 'шоурумы' },
  { href: '/pickup-points', title: 'пункты выдачи' },
  { href: '/franchise', title: 'франшиза' },
  { href: '/login', title: 'личный кабинет' },
];

// '/warranty-terms' → WarrantyTerms, '/' → Main
const toPascal = (s) => s
  .replace(/^\//, '')
  .split('-')
  .map(p => p.charAt(0).toUpperCase() + p.slice(1))
  .join('');
const getName = (href) => (href === '/' ? 'Main' : toPascal(href));

const jsxTemplate = (name, title) => `import classes from './${name}.module.css'

const ${name} = () => {
  return (
    <div className="section line-dark-section">
      <div className="container">
        <h1 className="h2">${title}</h1>
      </div>
    </div>
  )
}

export default ${name};
`;

const cssTemplate = `@media (max-width: 992px) {}

@media (max-width: 768px) {}

@media (max-width: 576px) {}
`;

const pagesDir = path.join(__dirname, 'src', 'pages');

/* ============ 0. Чистим мусор от прошлого запуска ============ */

// файлы '.jsx' и '.module.css', упавшие прямо в src/pages (жертвы href '/')
['.jsx', '.module.css'].forEach(f => {
  const p = path.join(pagesDir, f);
  if (fs.existsSync(p)) {
    fs.unlinkSync(p);
    console.log(`удалён мусор: src/pages/${f}`);
  }
});

/* ============ 0.5. Чиним регистр папок и файлов ============ */

const fixCase = (name) => {
  const found = fs.existsSync(pagesDir)
    ? fs.readdirSync(pagesDir).find(d => d.toLowerCase() === name.toLowerCase())
    : null;

  if (!found) return;

  if (found !== name) {
    const tmp = path.join(pagesDir, found + '__tmpfix');
    fs.renameSync(path.join(pagesDir, found), tmp);
    fs.renameSync(tmp, path.join(pagesDir, name));
    console.log(`папка: ${found} → ${name}`);
  }

  const dir = path.join(pagesDir, name);
  fs.readdirSync(dir).forEach(f => {
    const base = f.replace(/\.(jsx|module\.css)$/, '');
    if (base.toLowerCase() === name.toLowerCase() && base !== name) {
      const ext = f.slice(base.length);
      fs.renameSync(path.join(dir, f), path.join(dir, name + ext));
      console.log(`  файл: ${f} → ${name}${ext}`);
    }
  });
};

pages.forEach(({ href }) => fixCase(getName(href)));

/* ============ 0.7. Чиним битое СОДЕРЖИМОЕ заглушек ============ */

// Каркас заглушки: короткий файл, стандартный import, const X = () => {}, h1, export default X.
// Реальную страницу с твоим кодом он не примет — там другая структура.
const looksLikeStub = (content) => {
  const c = content.replace(/\s+/g, '');
  return (
    c.startsWith("importclassesfrom'./") &&
    c.includes('=()=>{') &&
    c.includes('<h1className="h2">') &&
    c.trimEnd().endsWith('};') === false && // export default в конце
    c.includes('exportdefault')
  );
};

const fixBrokenStub = (name, title) => {
  const jsxPath = path.join(pagesDir, name, `${name}.jsx`);
  if (!fs.existsSync(jsxPath)) return;

  const content = fs.readFileSync(jsxPath, 'utf8');
  if (!looksLikeStub(content)) return; // твой код — не трогаем

  const broken = content.includes('.//') || content.includes('const /');
  // имя компонента из export default
  const declared = (content.match(/export default\s+([A-Za-z/$]+);/) || [])[1];

  if (broken || declared !== name) {
    fs.writeFileSync(jsxPath, jsxTemplate(name, title));
    console.log(`исправлен: src/pages/${name}/${name}.jsx (${declared || 'битый импорт'} → ${name})`);
  }
};

pages.forEach(({ href, title }) => fixBrokenStub(getName(href), title));

/* ============ 1. Генерация недостающих страниц ============ */

pages.forEach(({ href, title }) => {
  const name = getName(href);
  const dir = path.join(pagesDir, name);
  fs.mkdirSync(dir, { recursive: true });

  const jsxPath = path.join(dir, `${name}.jsx`);
  const cssPath = path.join(dir, `${name}.module.css`);

  if (!fs.existsSync(jsxPath)) {
    fs.writeFileSync(jsxPath, jsxTemplate(name, title));
    console.log(`создан: src/pages/${name}/${name}.jsx`);
  }
  if (!fs.existsSync(cssPath)) {
    fs.writeFileSync(cssPath, cssTemplate);
    console.log(`создан: src/pages/${name}/${name}.module.css`);
  }
});

/* ============ 2. Генерация AppRouter.jsx ============ */

const imports = pages.map(({ href }) => {
  const name = getName(href);
  return `import ${name} from "../pages/${name}/${name}";`;
}).join('\n');

const routes = pages.map(({ href }) => {
  const name = getName(href);
  return `      <Route path="${href}" element={<${name} />} />`;
}).join('\n');

const routerTemplate = `import React, { useContext } from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthContext } from "../context";
import Loader from "./loader/Loader";

// Импорты страниц
${imports}

const AppRouter = () => {
  const { isAuth, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Routes>
      {/* Публичные */}
${routes}

      {/* Если ввели несуществующий путь */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRouter;
`;

const routerPath = path.join(__dirname, 'src', 'Components', 'AppRouter.jsx');
fs.writeFileSync(routerPath, routerTemplate);
console.log('ok: src/Components/AppRouter.jsx перезаписан');
