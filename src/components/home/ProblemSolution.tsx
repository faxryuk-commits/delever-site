import { XCircle, CheckCircle } from 'lucide-react'

const problems = [
  'Ошибки при ручном вводе заказов',
  'Потерянные заказы из-за сбоев',
  'Медленная доставка',
  'Дорогие операционные расходы',
  'Несколько систем и планшетов',
]

const solutions = [
  'Одна платформа для всего',
  'Всё в одном окне',
  'Автоматизация процессов',
  'Снижение операционных затрат',
  'Единая система управления',
]

export function ProblemSolution() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-lightBlue">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-darkBlue mb-4">
            Проблема → Решение
          </h2>
          <p className="text-xl text-brand-darkBlue/80 max-w-2xl mx-auto">
            Хаос из кучи систем, планшетов и ручного ввода превращается в единую платформу
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Problems */}
          <div>
            <h3 className="text-2xl font-semibold text-brand-darkBlue mb-6">
              Проблемы без Delever
            </h3>
            <ul className="space-y-4">
              {problems.map((problem, idx) => (
                <li key={idx} className="flex items-start space-x-3">
                  <XCircle className="h-6 w-6 text-red-500 mt-0.5 flex-shrink-0" />
                  <span className="text-brand-darkBlue/80">{problem}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-2xl font-semibold text-brand-darkBlue mb-6">
              Как Delever решает
            </h3>
            <ul className="space-y-4">
              {solutions.map((solution, idx) => (
                <li key={idx} className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-brand-darkBlue mt-0.5 flex-shrink-0" />
                  <span className="text-brand-darkBlue/80">{solution}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

