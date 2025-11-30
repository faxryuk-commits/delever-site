# Разделение админ-панели на отдельный проект

## Рекомендуемая архитектура

### Вариант 1: Отдельный проект (рекомендуется)

**Структура:**
```
delever-site/          # Основной сайт (публичный)
delever-admin/         # Админ-панель (отдельный проект)
```

**Деплой:**
- Основной сайт: `delever.io` или `www.delever.io`
- Админ-панель: `admin.delever.io` или `cms.delever.io`

### Вариант 2: Монорепозиторий

Использовать monorepo (например, Turborepo, Nx) для управления обоими проектами.

## Создание отдельного проекта для админки

### Шаг 1: Создать новый проект

```bash
# В родительской директории
npm create vite@latest delever-admin -- --template react-ts
cd delever-admin
npm install
```

### Шаг 2: Установить зависимости

```bash
npm install react-router-dom lucide-react sonner clsx tailwind-merge
npm install -D tailwindcss postcss autoprefixer
```

### Шаг 3: Скопировать файлы админки

Из `delever-site/src/pages/admin/` → `delever-admin/src/pages/`
Из `delever-site/src/components/admin/` → `delever-admin/src/components/`
Из `delever-site/src/contexts/AuthContext.tsx` → `delever-admin/src/contexts/`
Из `delever-site/src/contexts/ContentContext.tsx` → `delever-admin/src/contexts/`

### Шаг 4: Настроить роутинг

Создать отдельный `App.tsx` только для админки.

## Деплой на Vercel

### Основной сайт (delever-site)
- Домен: `delever.io`
- Build Command: `npm run build`
- Output Directory: `dist`

### Админ-панель (delever-admin)
- Домен: `admin.delever.io` (поддомен)
- Build Command: `npm run build`
- Output Directory: `dist`

## Настройка поддомена в Vercel

1. В настройках проекта админки
2. Добавить домен: `admin.delever.io`
3. Настроить DNS записи (CNAME) у регистратора домена

## Преимущества разделения

✅ **Безопасность**
- Админка не доступна на основном домене
- Можно использовать разные методы аутентификации
- Легче ограничить доступ по IP

✅ **Производительность**
- Меньший размер бандла для публичного сайта
- Независимые деплои
- Разные настройки кеширования

✅ **Масштабируемость**
- Можно использовать разные технологии
- Независимое версионирование
- Легче добавлять новые функции

✅ **Разработка**
- Разные команды могут работать независимо
- Чище структура кода
- Проще тестирование

## API для связи

Админка и сайт могут обмениваться данными через:
- REST API
- GraphQL
- Shared database
- Headless CMS (Strapi, Contentful)

## Текущее состояние

Админка уже удалена из основного проекта. Создайте отдельный проект для админки, используя инструкции выше.

