// Edge Function для проверки токена админки
// Этот endpoint проверяет токен и возвращает разрешение на загрузку в iframe

export const config = {
  runtime: 'edge',
}

export default async function handler(req: Request) {
  const url = new URL(req.url)
  const adminToken = url.searchParams.get('admin_token')
  const editMode = url.searchParams.get('edit_mode')

  // Получаем токен из переменной окружения
  const validToken = process.env.ADMIN_EDIT_TOKEN || 'admin-access-fallback'

  // Проверяем токен
  if (adminToken === validToken && editMode === 'true') {
    // Токен валидный - разрешаем доступ
    return new Response(JSON.stringify({ 
      authorized: true,
      message: 'Access granted'
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'X-Frame-Options': 'SAMEORIGIN',
        'Content-Security-Policy': "frame-ancestors 'self' https://siteadmin-*.vercel.app https://*.vercel.app",
      },
    })
  }

  // Токен невалидный
  return new Response(JSON.stringify({ 
    authorized: false,
    message: 'Invalid token'
  }), {
    status: 401,
    headers: {
      'Content-Type': 'application/json',
    },
  })
}

