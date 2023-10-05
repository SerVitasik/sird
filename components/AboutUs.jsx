import styles from "./AboutUs.module.scss";
import Title from "./ui/Title";

const AboutUs = () => {
  return (
    <section className={styles.about}>
      <Title isCenter>Про організацію</Title>
      <div className={styles.content}>
        <p className={styles.info}>
          Сіверський інститут регіональних досліджень – чернігівська міська
          громадська організація. Створена у 2000 р., статут зареєстровано
          розпорядженням чернігівського міськвиконкому № 340-р від 3 жовтня 2001
          р.
        </p>
        <p>Метою діяльності Інституту є:</p>
        <ol className={styles.list}>
          <li>
            Сприяння проведенню незалежних комплексних наукових досліджень;
            сприяння становленню громадянського суспільства, розвитку науки,
            освіти, мистецтва;
          </li>
          <li>
            Сприяння поширенню наукової інформації в українських та іноземних
            засобах масової інформації, насамперед в мережі Інтернет, пропаганді
            історико-культурної спадщини, задоволенні потреб громадськості в
            друкованій продукції; сприяння наданню громадянам та юридичним
            особам інформаційної, юридичної та іншої підтримки.
          </li>
          <li>
            Сприяння проведенню науково-дослідних та експертних робіт з органами
            виконавчої влади, місцевого самоврядування, підприємствами,
            установами та організаціями, іншими юридичними особами;
          </li>
          <li>
            Сприяння поліпшенню екологічної ситуації в області, медичному та
            екологічному моніторингу на території, забрудненій внаслідок аварії
            на Чорнобильській АЕС; організація і проведення наукових,
            науково-методичних та науково-практичних конференцій, семінарів,
            симпозіумів, лекторіїв за участю вітчизняних та іноземних фахівців;
          </li>
          <li>
            Сприяння підготовці наукових та науково-популярних праць,
            літературних творів, науково-методичних посібників, а також інших
            видів друкованої продукції;
          </li>
          <li>
            Сприяння заснуванню навчально-виховних закладів, наданню
            інформаційних, інноваційних, інвестиційних, комунікаційних,
            консультативних, маркетингових, посередницьких, представницьких,
            рекламних та інших послуг;
          </li>
          <li>
            Сприяння проведенню робіт з охорони пам'яток історії, культури і
            природи, розвитку, поновленню традиційних промислів та ремесел;
            створення картотеки та архіву Народної живої історії Сіверщини,
            сайтів Інтернет, поширення інформації про регіон всіма доступними
            засобами;
          </li>
          <li>
            Сприяння виробленню інтелектуального продукту, продукції
            виробничо-технічного призначення, масового споживання, народних
            промислів;
          </li>
          <li>
            Сприяння організації прийому і обслуговуванню іноземних туристів в
            Україні (іноземний туризм), організації прийому і обслуговуванню
            вітчизняних туристів (внутрішній туризм), організації туристичних
            поїздок за межі України (зарубіжний туризм), екскурсійній
            діяльності, організації масового оздоровчо-спортивного туризму.
          </li>
        </ol>
        <p className={styles.paragraph}>
        <span className={styles.blue}>Цілі та завдання діяльності організації</span> (довгострокові та короткочасні):
сприяння проведенню незалежних наукових досліджень в галузях
гуманітарних та політичних наук, права, економіки, медицини, екології та інших, запровадженню їх в життя, розробці нових освітніх методик, в тому числі із застосуванням інформаційних технологій;
        </p>
        <p className={styles.paragraph}>
          <span className={styles.blue}>Участь у програмах міжнародного наукового обміну</span> та інша діяльність, яка відповідає меті створення Інституту і не суперечить чинному законодавству.
        </p>
        <h2 className={`${styles.title} ${styles.small}`}>Творчий потенціал організації</h2>
        <p className={styles.paragraph}>Сіверський інститут створювавася науковими працівниками та має у своєму складі двох докторів наук та дев’ять кандидатів наук. Це найвищий за рівнем освіти рейтинг серед громадських організацій регіону.
Загальна чисельність організації – 13 осіб.
Керівник організації – <span className={styles.blue}>Лепявко Сергій Анатолійович</span>, доктор історичних наук.</p>
        <h2 className={`${styles.title} ${styles.small}`}>Засновники організації</h2>
        <div className={styles.founders}>
          <ol className={styles.list}>
            <li>Бойко Володимир Миколайович: кандидат історичних наук; Директор Чернігівського центру перепідготовки та підвищення кваліфікації працівників органів державної влади.</li>
            <li> Брехуненко Віктор Анатолійович: доктор історичних наук;
Завідувач відділу теорії джерелознавства Інституту археографії НАН України.</li>
            <li>Веремейчик Олена Михайлівна: кандидат історичних наук, доцентДокторант Чернігівського державного педагогічного університету ім. Т.Г.Шевченка.</li>
            <li>Горошко Юрій Васильович: кандидат технічних наук, доцент;Доцент кафедри інформатики Чернігівського державного педагогічного університету ім. Т.Г.Шевченка.</li>
            <li>Гринь Дмитро Костянтинович: доктор історичних наук;Заступник декана історичного факультету з наукової роботи, доцент кафедри історії слов’ян Чернігівського державного педагогічного університету ім. Т.Г.Шевченка.</li>
            <li>Ігнатенко Ігор Михайлович: ...Незалежний експерт.</li>
            <li>Кухарук Олександр Васильович: кандидат історичних наук, доцент;Декан економічного факультету Чернігівського державного інститут права, соціальних технологій і праці.</li>
          </ol>
          <ol className={styles.list} start='8'>
            <li>Леп’явко Сергій Анатолійович: доктор історичних наук, професор; Завідувач кафедри історії слов’ян Чернігівського державного педагогічного університету ім. Т.Г.Шевченка.</li>
            <li>Марцинкевич Олександр Олександрович: кандидат медичних наук;Завідувач неврологічним відділення Чернігівської обласної лікарні.</li>
            <li>Паперний Юрій Володимирович: ...Редактор журналу «Чернігівський монітор».</li>
            <li>Тарасенко Олександр Федорович: кандидат історичних наук;Доцент кафедри історії та археології України Чернігівського державного педагогічного університету ім. Т.Г.Шевченка.</li>
            <li>Ткаченко Володимир Володимирович: кандидат історичних наук, доцент;Доцент кафедри загальної історії Чернігівського державного педагогічного університету ім. Т.Г.Шевченка.</li>
            <li>Ткаченко Еліна Олексіївна: ...Приватний підприємець.</li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
