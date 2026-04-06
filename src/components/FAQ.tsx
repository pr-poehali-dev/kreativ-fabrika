import { useState } from "react"
import { Plus } from "lucide-react"

const faqs = [
  {
    question: "В каких регионах вы строите?",
    answer:
      "Мы работаем по всей северо-западной России: Карелия, Вологодская, Ленинградская, Новгородская и Архангельская области. По запросу выезжаем в другие регионы — обсудим на консультации.",
  },
  {
    question: "Сколько времени занимает строительство дома?",
    answer:
      "Сроки зависят от размера и сложности проекта. В среднем: сруб собираем за 2–4 месяца, полный цикл «под ключ» — от 6 до 12 месяцев. После усадки (1–1,5 года) проводим финальную отделку.",
  },
  {
    question: "Какое дерево вы используете?",
    answer:
      "Работаем с сосной, елью и лиственницей северной заготовки. Лес рубится зимой — в это время он наиболее плотный и смолистый. Все материалы проходят входной контроль.",
  },
  {
    question: "Что входит в строительство «под ключ»?",
    answer:
      "Полный цикл: проектирование, фундамент, сруб, кровля, утепление, окна и двери, инженерные сети (электрика, водоснабжение, отопление), чистовая отделка. Вы заезжаете в готовый дом.",
  },
  {
    question: "Строите ли вы бани?",
    answer:
      "Да, бани — одно из наших ключевых направлений. Строим классические русские парные, финские сауны, бани с купелью и террасой. Используем лиственницу и ель — они лучше всего переносят перепады температур и влажность.",
  },
  {
    question: "Как начать сотрудничество?",
    answer:
      "Свяжитесь с нами любым удобным способом. Мы проведём бесплатную консультацию, обсудим ваш участок, пожелания и бюджет, а затем подготовим индивидуальное предложение с расчётом стоимости.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Вопросы</p>
          <h2 className="text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-7xl">
            Частые вопросы
          </h2>
        </div>

        <div>
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-border">
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full py-6 flex items-start justify-between gap-6 text-left group"
              >
                <span className="text-lg font-medium text-foreground transition-colors group-hover:text-foreground/70">
                  {faq.question}
                </span>
                <Plus
                  className={`w-6 h-6 text-foreground flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : "rotate-0"
                  }`}
                  strokeWidth={1.5}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-muted-foreground leading-relaxed pb-6 pr-12">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}